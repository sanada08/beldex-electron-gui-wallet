// const sqlite3 = require('sqlite3').verbose();
// const { open } = require('sqlite');
const fs = require("fs");
const _ = require("lodash");
const path = require("upath");

export class SwapTxnHistory {
  constructor(backend) {
    this.backend = backend;
  }

  // let address = 'addr';
  async getOrderHistory(address) {
    try {
      const filePath = path.join(__dirname, "swap_transaction_history.json");
      const data = fs.readFileSync(filePath);
      let jsonData = JSON.parse(data);
      let transaction_id = jsonData[`${address}`];
      return transaction_id;
    } catch (error) {
      console.error("error:,", error.message);
    }
  }

  // let txn_id = 'mohammed_khan_rahman';
  // let address = 'addr';
  async updateTransactionDetails(txn_id, address) {
    try {
      const filePath = path.join(__dirname, "swap_transaction_history.json");
      const data = fs.readFileSync(filePath);
      let jsonData = JSON.parse(data);
      let tx_id = [`${txn_id}`];
      if (_.isEmpty(jsonData)) {
        jsonData = { [`${address}`]: tx_id };
        const jsonString = JSON.stringify(jsonData);
        fs.writeFileSync(filePath, jsonString, "utf-8", err => {
          if (err) throw err;
          console.log("Data added to file");
        });
        return;
      } else {
        if (_.has(jsonData, address)) {
          let data = jsonData[`${address}`];
          let checkAlreadyExits = data.find(function(element) {
            return element == tx_id[0];
          });
          if (!checkAlreadyExits) {
            data.push(`${tx_id}`);
            const jsonString = JSON.stringify(jsonData);
            fs.writeFileSync(filePath, jsonString, "utf-8", err => {
              if (err) throw err;
              console.log("Data added to file");
            });
          }
          return;
        } else {
          jsonData[`${address}`] = tx_id;
          const jsonString = JSON.stringify(jsonData);
          fs.writeFileSync(filePath, jsonString, "utf-8", err => {
            if (err) throw err;
            console.log("Data added to file");
          });
          return;
        }
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
