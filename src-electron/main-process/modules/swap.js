import axios from "axios";

export class Swap {
  constructor(backend) {
    this.backend = backend;
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
        this.getFixedExchangeAmount(params.from, params.to, params.amount);
        break;

      case "get_min_max":
        this.getPairsMinMax(params.from, params.to);
        break;

      case "get_min":
        this.getMinAmount(params.from, params.to);
        break;

      case "validate_address":
        this.validateAddress(params.currency, params.address);
        break;

      case "create_transaction":
        this.createTransaction(
          params.from,
          params.to,
          params.recipentAddress,
          params.amount
        );
        break;

      case "create_fixed_transaction":
        this.createFixTransaction(
          params.from,
          params.to,
          params.recipentAddress,
          params.amount,
          params.rateId,
          params.refundAddress
        );
        break;

      case "transaction_history":
        this.getTransactionHistory(params.currency);
        break;

      case "transaction_status":
        this.getTransactionStatus(params.transactionID);
        break;

      default:
    }
  }

  async getCurrencyList() {
    let currencyList = await this.sendRPC("getCurrenciesFull", {});

    if (currencyList.status) {
      let enabledCurrency = await currencyList.result.filter(currency => {
        return currency.enabled == true;
      });
      this.sendGateway("set_currencyList", enabledCurrency);
      return;
    }
    return;
  }

  async getExchangeAmount(params) {
    // let body = {
    //   from,
    //   to,
    //   address,
    //   amountFrom
    // };
    console.log("getExchangeAmount ::", params);
    let data = await this.sendRPC("getExchangeAmount", params);
    console.log("getExchangeAmount", data.result);

    this.sendGateway("set_exchangeAmount", data);
    return;
  }

  getFixedExchangeAmount(from, to, amountFrom) {
    let params = {
      from,
      to,
      amountFrom
    };
    // from: "btc",
    // to: "eth",
    // amountFrom: "0.1"
    return this.sendRPC("getFixRateForAmount", params);
  }

  getPairsMinMax(from, to) {
    let params = {
      from,
      to
    };
    // from: "btc",
    // to: "eth"
    return this.sendRPC("getPairsParams", params);
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

  validateAddress(currency, address) {
    let params = {
      currency,
      address
    };
    // currency: "eth",
    // address: "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7"
    return this.sendRPC("validateAddress", params);
  }

  createTransaction(from, to, address, amountFrom) {
    let params = {
      from,
      to,
      address,
      // "extraId": "<<valid xrp extraId>>",
      amountFrom
    };
    // from: "btc",
    //   to: "eth",
    //   address: "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
    //   // "extraId": "<<valid xrp extraId>>",
    //   amountFrom: "0.1"
    return this.sendRPC("createTransaction", params);
  }

  createFixTransaction(from, to, address, amountFrom, rateId, refundAddress) {
    let params = {
      from,
      to,
      address,
      amountFrom,
      rateId,
      refundAddress
    };
    // from: "btc",
    // to: "eth",
    // address: "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
    // amountFrom: "0.1",
    // rateId: "xnsnh0&jcqJG4awmG8La0y5pLGIpIQ",
    // refundAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
    return this.sendRPC("createFixTransaction", params);
  }

  getTransactionHistory(currency) {
    let params = {
      currency,
      // "address": "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
      // "extraId": "<<payin extraId to search>>",
      limit: 10,
      offset: 10
    };
    // currency: "eth",
    // // "address": "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
    // // "extraId": "<<payin extraId to search>>",
    // limit: 10,
    // offset: 10
    return this.sendRPC("getTransactions", params);
  }

  getTransactionStatus(transactionID) {
    let params = {
      id: transactionID //create transaction id
    };
    // id: "yam9z4aanpqnchy4" //create transaction id
    return this.sendRPC("getStatus", params);
  }

  async sendRPC(method, params = {}) {
    try {
      let body = {
        jsonrpc: "2.0",
        id: "test",
        method,
        params
        // : {
        //   "from": "btc",
        //   "to": "eth",
        //   "address": "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
        //   "amountFrom": "0.1"
        // }
      };
      let apiSignature;

      if (method == "getCurrenciesFull") {
        apiSignature = "<< your Api Signature >>";
      } else {
        apiSignature = "<< your Api Signature >>";
      }
      let headers = {
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "+kLt3F2TMo8W2LbQSjs6IDaBG4O/VLZsRH+qnNX5FyU=",
          "X-Api-Signature": apiSignature
        }
      };
      // let message = {
      //   jsonrpc: "2.0",
      //   id: "test",
      //   method: "getExchangeAmount",
      //   params: {
      //     "from": "btc  ",
      //     "to": "eth",
      //     "address": "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
      //     "amountFrom": "0.1"
      //   }
      // }
      // const request = require('request');
      // let options = {
      //   'method': 'POST',
      //   'url': 'https://api.changelly.com/v2',
      //   'headers': {
      //     'Content-Type': 'application/json',
      //     'X-Api-Key': '<<ENTER YOUR API KEY >>',
      //     'X-Api-Signature': '<<ENTER YOUR PRIVATE KEY >>'
      //   },
      //   body: JSON.stringify(message)
      // };
      // request(options, function (error, data) {
      //   try {
      //     let response = JSON.parse(data.body);
      //     if (response.hasOwnProperty("error")) {
      //       return {
      //         status:400,
      //         method: method,
      //         params: params,
      //         error: response.error
      //       };
      //     }
      //     return {
      //       status:200,
      //       method: method,
      //       params: params,
      //       result: response.result
      //     };
      //   } catch (err) {
      //     return {
      //       status:400,
      //       method: method,
      //       params: params,
      //       error: response.error
      //     };
      //   }

      // });
      try {
        let response = await axios.post(
          "https://api.changelly.com/v2",
          body,
          headers
        );
        if (response.hasOwnProperty("error")) {
          return {
            status: false,
            method: method,
            error: response
          };
        }
        return {
          status: true,
          method: method,
          result: response.data.result
        };
      } catch (err) {
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
