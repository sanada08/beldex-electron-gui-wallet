import axios from "axios";
const { SwapTxnHistory } = require("./swap_transaction_history");

export class Swap {
  constructor(backend) {
    this.backend = backend;
    this.swapTxnHistory = new SwapTxnHistory(this);
    this.wallet_state = {
      open: false
    };
  }

  sendGateway(method, data) {
    // console.log("gateway 3", method);

    // console.log("sendGateway:", method, data);
    // if wallet is closed, do not send any wallet data to gateway
    // this is for the case that we close the wallet at the same
    // after another action has started, but before it has finished
    if (!this.wallet_state.open && method == "set_wallet_data") {
      return;
    }
    this.backend.send(method, data);
  }
  async handle(data) {
    let params = data.data;
    // console.log("paramms:", params);
    switch (data.method) {
      case "currency_list":
        // console.log("currency  1");
        this.getCurrencyList();
        break;

      case "exchange_amount":
        // this.getExchangeAmount(
        //   params.from,
        //   params.to,
        //   params.recipentAddress,
        //   params.amount
        // );
        this.getExchangeAmount(params);

        break;

      case "fixed_exchange_amount":
        this.getFixedExchangeAmount(params);
        break;

      case "get_min_max":
        this.getPairsMinMax(params);
        break;

      case "get_min":
        this.getMinAmount(params.from, params.to);
        break;

      case "validate_address":
        this.validateAddress(params);
        break;

      case "refundAddressValidation":
        this.refundAddressValidation(params);
        break;

      case "create_transaction":
        this.createTransaction(params);
        break;

      case "create_fixed_transaction":
        this.createFixTransaction(params);
        break;

      case "transaction_history":
        this.getTransactionHistory(params);
        break;

      case "transaction_status":
        this.getTransactionStatus(params);
        break;

      default:
    }
  }

  async getCurrencyList() {
    let currencyList = await this.sendRPC("getCurrenciesFull", {});

    // if (currencyList.status) {
    //   let enabledCurrency = await currencyList.result.filter(currency => {
    //     return currency.enabled == true;
    //   });
    this.sendGateway("set_currencyList", currencyList);
    //   return;
    // }
    return;
  }

  async getExchangeAmount(params) {
    // let body = {
    //   from,
    //   to,
    //   address,
    //   amountFrom
    // };
    // console.log("params get:", params);
    let data = await this.sendRPC("getExchangeAmount", params);

    // console.log("getExchangeAmount", data);

    this.sendGateway("set_exchangeAmount", data);
    return;
  }

  async getFixedExchangeAmount(params) {
    // let params = {
    //   from,
    //   to,
    //   amountFrom
    // };
    // from: "btc",
    // to: "eth",
    // amountFrom: "0.1"
    // console.log("params get-fix:", params);

    let data = await this.sendRPC("getFixRateForAmount", params);
    // console.log("getFixRateForAmount", data);
    this.sendGateway("set_fixedExchangeRate", data);

    return;
  }

  async getPairsMinMax(params) {
    // let params = {
    //   from,
    //   to
    // };
    // from: "btc",
    // to: "eth"
    // console.log("getPairsParams ::", params);
    let data = await this.sendRPC("getPairsParams", params);
    // console.log("getPairsParams result ::", data);
    this.sendGateway("set_pairsMinMax", data);
    // return this.sendRPC("getPairsParams", params);
  }

  getMinAmount(from, to) {
    let params = {
      from,
      to
    };

    // from: "xrp",
    // to: "eth"
    return this.sendRPC("getMinAmount", params);
  }

  async validateAddress(params) {
    // console.log("validateAddress ::", params);
    let data = await this.sendRPC("validateAddress", params);
    // console.log("validateAddress data ", data);
    this.sendGateway("set_validateAddress", data);

    // currency: "eth",
    // address: "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7"
    // return this.sendRPC("validateAddress", params);
  }
  async refundAddressValidation(params) {
    // console.log("validateRefundAddress ::", params);
    let data = await this.sendRPC("validateAddress", params);
    // console.log("validateRefundAddress data ", data);
    this.sendGateway("set_refundAddressValidation", data);

    // currency: "eth",
    // address: "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7"
    // return this.sendRPC("validateAddress", params);
  }

  async createTransaction(params) {
    // let params = {
    //   from,
    //   to,
    //   address,
    //   // "extraId": "<<valid xrp extraId>>",
    //   amountFrom
    // };
    // console.log("createTransaction ::", params);

    // console.log("createTransaction 1::", params.walletAddress);
    let walletAddress = params.walletAddress;
    delete params["walletAddress"];
    let data = await this.sendRPC("createTransaction", params);

    // console.log("createTransaction datadata ::", data.result);
    await this.swapTxnHistory.updateTransactionDetails(
      data.result.id,
      walletAddress
    );

    this.sendGateway("set_createdTxnDetails", data);

    // from: "btc",
    //   to: "eth",
    //   address: "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
    //   // "extraId": "<<valid xrp extraId>>",
    //   amountFrom: "0.1"
    return;
  }

  async createFixTransaction(params) {
    // let params = {
    //   from,
    //   to,
    //   address,
    //   amountFrom,
    //   rateId,
    //   refundAddress
    // };
    // from: "btc",
    // to: "eth",
    // address: "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
    // amountFrom: "0.1",
    // rateId: "xnsnh0&jcqJG4awmG8La0y5pLGIpIQ",
    // refundAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
    let walletAddress = params.walletAddress;
    delete params["walletAddress"];
    let data = await this.sendRPC("createFixTransaction", params);
    // console.log("walletAddress ::", data.result.id, walletAddress);

    // console.log("createFixTransaction data::", data, data.result.id);
    await this.swapTxnHistory.updateTransactionDetails(
      data.result.id,
      walletAddress
    );
    this.sendGateway("set_createdTxnDetails", data);
    // return this.sendRPC("createFixTransaction", params);
  }

  async getTransactionHistory(params) {
    // currency: "eth",
    // // "address": "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
    // // "extraId": "<<payin extraId to search>>",
    // limit: 10,
    // offset: 10

    let actualTransactions = await this.swapTxnHistory.getOrderHistory(
      params.walletAddress
    );
    let orderHistory = [];
    let finalorderHistory = [];
    for (let i = 0; i < actualTransactions.length / 10; i++) {
      // console.log(i, i * 10, (i + 1) * 10);
      let ids = actualTransactions.slice(i * 10, (i + 1) * 10);
      let params = {
        id: ids
      };
      let response = await this.sendRPC("getTransactions", params);
      for (let j = 0; j < response.result.length; j++) {
        orderHistory.push(response.result[j]);
      }
    }
    for (let k = 0; k < orderHistory.length; k++) {
      const element = orderHistory.find(e => e.id == actualTransactions[k]);
      finalorderHistory.push(element);
    }
    // console.log("orderHistory:orderHistory:", orderHistory)
    // console.log("finalorderHistory:", finalorderHistory)

    this.sendGateway("set_txnHistory", orderHistory);
  }

  async getTransactionStatus(params) {
    // let params = {
    //   id: transactionID //create transaction id
    // };
    // id: "yam9z4aanpqnchy4" //create transaction id

    // let data = await this.sendRPC("getStatus", params);
    let data = await this.sendRPC("getTransactions", params);

    // console.log("getStatus data::", data);
    this.sendGateway("set_txnStatus", data);

    // return this.sendRPC("getStatus", params);
  }

  async sendRPC(method, params = {}) {
    try {
      const https = require("https");
      // const privateKeyString = "PRIVATE_KEY";
      // const privateKeybuffer = Buffer.from(privateKeyString, "hex");
      const body = {
        jsonrpc: "2.0",
        id: "test",
        method,
        params
      };

      const agent = new https.Agent({
        requestCert: true,
        rejectUnauthorized: false,
        ca: `your pem key`
      });
      let signature = await axios.post(
        "https://api.beldex.io/api/v1/swap",
        body,
        { httpsAgent: agent }
      );
      // console.log("signature:", signature.data.signature);

      let headers = {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "+kLt3F2TMo8W2LbQSjs6IDaBG4O/VLZsRH+qnNX5FyU=",
          "X-Api-Signature": signature.data.signature
        }
      };
      // const request = require('request');
      // let options = {
      //   'method': 'POST',
      //   'url': 'https://api.changelly.com/v2',
      //   'headers': {
      //     'Content-Type': 'application/json',
      //     'X-Api-Key': '<<ENTER YOUR API KEY >>',
      //     'X-Api-Signature': '<<ENTER YOUR PRIVATE KEY >>'
      //   },
      //   body: JSON.stringify(bo)
      // };
      // request(options, function (error, data) {
      // try {
      //   let response = JSON.parse(data.body);
      //   if (response.hasOwnProperty("error")) {
      //     return {
      //       status:400,
      //       method: method,
      //       params: params,
      //       error: response.error
      //     };
      //   }
      //   return {
      //     status:200,
      //     method: method,
      //     params: params,
      //     result: response.result
      //   };
      // } catch (err) {
      //   return {
      //     status:400,
      //     method: method,
      //     params: params,
      //     error: response.error
      //   };
      // }
      // });
      try {
        let response = await axios.post(
          "https://api.changelly.com/v2",
          body,
          headers
        );
        if (response.data.hasOwnProperty("error")) {
          // if(method==='getPairsParams')
          // {

          // }
          return {
            status: false,
            method: method,
            error: response.data
          };
        }
        return {
          status: true,
          method: method,
          result: response.data.result
        };
      } catch (err) {
        // console.log("error inner:", err.data);

        return {
          status: false,
          method: method
        };
      }
    } catch (err) {
      console.log("error:", err);
      return err;
    }
  }
}
