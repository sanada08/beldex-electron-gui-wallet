import axios from "axios";

export class Swap {
  constructor(backend) {
    this.backend = backend;
    this.wallet_state = {
      open: false
    };
  }

  sendGateway(method, data) {
    console.log("gateway 3", method);

    console.log("sendGateway:", method, data);
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
    console.log("paramms:", params);
    switch (data.method) {
      case "currency_list":
        console.log("currency  1");
        this.getCurrencyList();
        break;

      case "exchange_amount":
        this.getExchangeAmount();
        break;

      case "fixed_exchange_amount":
        this.getFixedExchangeAmount();
        break;

      case "get_min_max":
        this.getPairsMinMax();
        break;

      case "get_min":
        this.getMinAmount();
        break;

      case "validate_address":
        this.validateAddress();
        break;

      case "create_transaction":
        this.createTransaction();
        break;

      case "create_fixed_transaction":
        this.createFixTransaction();
        break;

      case "transaction_history":
        this.getTransactionHistory();
        break;

      case "transaction_status":
        this.getTransactionStatus();
        break;

      default:
    }
  }

  async getCurrencyList() {
    const data = await this.sendRPC("getCurrenciesFull", {});
    this.sendGateway("set_currencyInfo", data);
    return;
  }

  getExchangeAmount() {
    let params = {
      from: "btc",
      to: "eth",
      address: "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
      amountFrom: "0.1"
    };
    return this.sendRPC("getExchangeAmount", params);
  }

  getFixedExchangeAmount() {
    let params = {
      from: "btc",
      to: "eth",
      amountFrom: "0.1"
    };
    return this.sendRPC("getFixRateForAmount", params);
  }

  getPairsMinMax() {
    let params = {
      from: "btc",
      to: "eth"
    };
    return this.sendRPC("getPairsParams", params);
  }

  getMinAmount() {
    let params = {
      from: "xrp",
      to: "eth"
    };
    return this.sendRPC("getMinAmount", params);
  }

  validateAddress() {
    let params = {
      currency: "eth",
      address: "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7"
    };
    return this.sendRPC("validateAddress", params);
  }

  createTransaction() {
    let params = {
      from: "btc",
      to: "eth",
      address: "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
      // "extraId": "<<valid xrp extraId>>",
      amountFrom: "0.1"
    };
    return this.sendRPC("createTransaction", params);
  }

  createFixTransaction() {
    let params = {
      from: "btc",
      to: "eth",
      address: "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
      amountFrom: "0.1",
      rateId: "xnsnh0&jcqJG4awmG8La0y5pLGIpIQ",
      refundAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
    };
    return this.sendRPC("createFixTransaction", params);
  }

  getTransactionHistory() {
    let params = {
      currency: "eth",
      // "address": "0x410afe72a5f18cce5f758c731bb2a9b90e74e5c7",
      // "extraId": "<<payin extraId to search>>",
      limit: 10,
      offset: 10
    };
    return this.sendRPC("getTransactions", params);
  }

  getTransactionStatus() {
    let params = {
      id: "yam9z4aanpqnchy4" //create transaction id
    };
    return this.sendRPC("getStatus", params);
  }

  async sendRPC(method, params = {}) {
    let body = {
      jsonrpc: "2.0",
      id: "test",
      method,
      params
    };
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "<<YOUR_API_KEY>>",
        "X-Api-Signature": "<<YOUR_API_SIGNATURE_KEY>>"
      }
    };
    try {
      let response = await axios.post(
        "https://api.changelly.com/v2",
        body,
        headers
      );
      // console.log("A:", response.data.result);
      return response.data.result;
    } catch (err) {
      return err;
    }
  }
}
