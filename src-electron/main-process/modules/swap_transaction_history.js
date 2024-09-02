// const sqlite3 = require('sqlite3').verbose();
// const { open } = require('sqlite');
const fs = require("fs");
const _ = require("lodash");
const path = require("upath");
const os = require("os");

export class SwapTxnHistory {
  constructor(backend) {
    this.backend = backend;
  }

  // let address = 'addr';
  async getOrderHistory(address) {
    try {
      let fileDir;
      if (os.platform() === "win32") {
        fileDir = `${os.homedir()}\\Documents\\Beldex`;
      } else {
        fileDir = path.join(os.homedir(), "Beldex");
      }
      const filePath = path.join(fileDir, "swap_transaction_history.json");
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
      let fileDir;
      if (os.platform() === "win32") {
        fileDir = `${os.homedir()}\\Documents\\Beldex`;
      } else {
        fileDir = path.join(os.homedir(), "Beldex");
      }
      const filePath = path.join(fileDir, "swap_transaction_history.json");
      let tx_id = [`${txn_id}`];
      fs.readFile(filePath, "utf8", function readFileCallback(err, data) {
        if (err) {
          tx_id = [`${txn_id}`];
          let data = { [`${address}`]: tx_id };
          const jsonString = JSON.stringify(data);
          fs.writeFile(filePath, jsonString, "utf8", err => {
            console.log("er:", err);
          });
        } else {
          let jsonData = JSON.parse(data);
          tx_id = [`${txn_id}`];
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
        }
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
