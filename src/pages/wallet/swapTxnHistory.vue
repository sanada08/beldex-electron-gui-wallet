<template>
  <div v-if="isVisible" class="swapTxnHistory">
    <!-- <q-header>
        <q-toolbar top> -->
    <header class="flex row items-center q-mb-md justify-between">
      <div class="flex items-center back-arrow-btn" @click="backToSwap">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 -6.10352e-05C5.8201 -6.10352e-05 0 5.82008 0 13C0 20.18 5.8201 26.0001 13 26.0001C20.1799 26.0001 26 20.18 26 13C26 5.82008 20.1799 -6.10352e-05 13 -6.10352e-05ZM18.2 14.3H10.9382L13 16.3618C13.507 16.8688 13.507 17.6931 13 18.2001C12.493 18.7071 11.6688 18.7071 11.1618 18.2001L6.8809 13.9191C6.3726 13.4108 6.3726 12.5879 6.8809 12.0809L11.1618 7.79999C11.6688 7.29299 12.493 7.29299 13 7.79999C13.507 8.30699 13.507 9.1312 13 9.6382L10.9382 11.7H18.2C18.9176 11.7 19.5 12.2824 19.5 13C19.5 13.7176 18.9176 14.3 18.2 14.3Z"
            fill="white"
          />
        </svg>
        <div class="ft-semibold q-ml-md header-txt">History</div>
      </div>

      <q-btn color="primary" class="downloadCsv-btn" @click="downloadCsv">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="csv" clip-path="url(#clip0_1350_3876)">
            <path
              id="Vector"
              d="M5.00022 1C4.08629 1 3.33355 1.75274 3.33355 2.66667V7.66667H4.44466V2.66667C4.44466 2.35392 4.68747 2.11111 5.00022 2.11111H10.0002V5.44444H13.3335V7.66667H14.4447V4.65885L10.7858 1H5.00022ZM11.1113 2.8967L12.548 4.33333H11.1113V2.8967ZM1.66471 8.77778C0.75079 8.77778 -0.00195312 9.53052 -0.00195312 10.4444V11.5556V12.6667C-0.00195312 13.5806 0.75079 14.3333 1.66471 14.3333C2.57864 14.3333 3.33138 13.5806 3.33138 12.6667H2.22027C2.22027 12.9794 1.97746 13.2222 1.66471 13.2222C1.35197 13.2222 1.10916 12.9794 1.10916 12.6667V11.5556V10.4444C1.10916 10.1317 1.35197 9.88889 1.66471 9.88889C1.97746 9.88889 2.22027 10.1317 2.22027 10.4444H3.33138C3.33138 9.53052 2.57864 8.77778 1.66471 8.77778ZM6.10916 8.77778C5.4536 8.77778 5.07016 9.04273 4.8635 9.26606C4.40683 9.75828 4.44133 10.4133 4.44466 10.4444C4.44466 11.3422 5.26076 11.7472 5.85742 12.0438C6.33075 12.2783 6.66471 12.4598 6.66471 12.6753C6.66471 12.6776 6.65402 12.9464 6.50846 13.0942C6.47735 13.1264 6.38249 13.2222 6.10916 13.2222H4.54666C4.61332 13.4344 4.7177 13.6699 4.91992 13.8754C5.12437 14.0843 5.49805 14.3333 6.10916 14.3333C6.72027 14.3333 7.0939 14.0833 7.30056 13.8733C7.7739 13.3922 7.77694 12.7311 7.77582 12.6667C7.77582 11.7556 6.95115 11.3466 6.35004 11.0477C5.88449 10.8166 5.55471 10.6375 5.5536 10.4097C5.5536 10.4075 5.54614 10.158 5.67947 10.0191C5.76169 9.93354 5.90582 9.88889 6.10916 9.88889H7.68034C7.49367 9.33 7.01582 8.77778 6.10916 8.77778ZM8.88694 8.77778L9.99805 14.3333H11.1092L12.2203 8.77778H11.1092L10.5536 11.9722L9.99805 8.77778H8.88694ZM14.4447 9.88889V10.4444V13.2222H12.2224L14.4447 15.4444L15.0002 16L15.5558 15.4444L17.778 13.2222H15.5558V10.4444V9.88889H14.4447Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1350_3876">
              <rect width="18" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span class="q-ml-xs">Download CSV</span>
      </q-btn>
    </header>

    <section class="q-mt-lg">
      <table style="width: 100%" class="txn-details-wrapper">
        <tr>
          <th>Status</th>
          <th>Date</th>
          <th>Exchange Amt</th>
          <th>Exchange rate</th>
          <th>Receiver</th>
          <th>Amount Received</th>
        </tr>
        <tr
          v-for="(item, i) in this.txnHistory"
          :key="i"
          @click="setTxnDetails(i)"
        >
          <td class="cursor">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0007 2.33334C7.56765 2.33334 2.33398 7.56701 2.33398 14C2.33398 20.433 7.56765 25.6667 14.0007 25.6667C20.4337 25.6667 25.6673 20.433 25.6673 14C25.6673 12.6863 25.4386 11.4266 25.0361 10.2471L23.1471 12.1361C23.2696 12.7381 23.334 13.3618 23.334 14C23.334 19.1462 19.1468 23.3333 14.0007 23.3333C8.85448 23.3333 4.66732 19.1462 4.66732 14C4.66732 8.85384 8.85448 4.66668 14.0007 4.66668C15.9058 4.66668 17.6779 5.24288 19.1572 6.22755L20.8275 4.5573C18.9048 3.1643 16.5498 2.33334 14.0007 2.33334ZM24.8424 3.84181L12.834 15.8503L8.99219 12.0085L7.34245 13.6582L12.834 19.1498L26.4922 5.49155L24.8424 3.84181Z"
                fill="#159B24"
              />
            </svg>
          </td>
          <td class="ft-medium cursor">
            {{ convertHumanReadableFormat(item.createdAt) }}
          </td>

          <td class="ft-semibold cursor">{{ item.amountExpectedFrom }}</td>
          <td class="ft-medium cursor uppercase">
            1 {{ item.currencyFrom }} ~ {{ item.rate }} {{ item.currencyTo }}
          </td>
          <td class="ft-medium cursor">
            {{
              item.payoutAddress.substr(0, 6) +
                "...." +
                item.payoutAddress.substr(
                  item.payoutAddress.length - 6,
                  item.payoutAddress.length
                )
            }}
          </td>
          <td class="ft-semibold cursor uppercase">
            {{ item.amountExpectedTo + " " + item.currencyTo }}
          </td>
        </tr>

        <!-- <tr>
          <td>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0007 2.33334C7.56765 2.33334 2.33398 7.56701 2.33398 14C2.33398 20.433 7.56765 25.6667 14.0007 25.6667C20.4337 25.6667 25.6673 20.433 25.6673 14C25.6673 12.6863 25.4386 11.4266 25.0361 10.2471L23.1471 12.1361C23.2696 12.7381 23.334 13.3618 23.334 14C23.334 19.1462 19.1468 23.3333 14.0007 23.3333C8.85448 23.3333 4.66732 19.1462 4.66732 14C4.66732 8.85384 8.85448 4.66668 14.0007 4.66668C15.9058 4.66668 17.6779 5.24288 19.1572 6.22755L20.8275 4.5573C18.9048 3.1643 16.5498 2.33334 14.0007 2.33334ZM24.8424 3.84181L12.834 15.8503L8.99219 12.0085L7.34245 13.6582L12.834 19.1498L26.4922 5.49155L24.8424 3.84181Z"
                fill="#159B24"
              />
            </svg>
          </td>
          <td class="ft-medium">28 Apr 2023, 20:14:15</td>

          <td class="ft-semibold">774BDX</td>
          <td class="ft-medium">1 BDX = 0.00000116BTC</td>
          <td class="ft-medium">142...hzy</td>
          <td class="ft-semibold">0.00063271 BTC</td>
        </tr> -->

        <!-- <tr>
          <td>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0007 2.33334C7.56765 2.33334 2.33398 7.56701 2.33398 14C2.33398 20.433 7.56765 25.6667 14.0007 25.6667C20.4337 25.6667 25.6673 20.433 25.6673 14C25.6673 12.6863 25.4386 11.4266 25.0361 10.2471L23.1471 12.1361C23.2696 12.7381 23.334 13.3618 23.334 14C23.334 19.1462 19.1468 23.3333 14.0007 23.3333C8.85448 23.3333 4.66732 19.1462 4.66732 14C4.66732 8.85384 8.85448 4.66668 14.0007 4.66668C15.9058 4.66668 17.6779 5.24288 19.1572 6.22755L20.8275 4.5573C18.9048 3.1643 16.5498 2.33334 14.0007 2.33334ZM24.8424 3.84181L12.834 15.8503L8.99219 12.0085L7.34245 13.6582L12.834 19.1498L26.4922 5.49155L24.8424 3.84181Z"
                fill="#159B24"
              />
            </svg>
          </td>
          <td class="ft-medium">28 Apr 2023, 20:14:15</td>
          <td class="ft-semibold">774BDX</td>
          <td class="ft-medium">1 BDX = 0.00000116BTC</td>
          <td class="ft-medium">142...hzy</td>
          <td class="ft-semibold">0.00063271 BTC</td>
        </tr> -->
      </table>
    </section>

    <!-- <div class="flex justify-center q-mt-sm">
        <q-btn c color="primary" label="Confirm & Make payment" />
      </div>
   -->
    <!-- </q-toolbar>
      </q-header> -->
  </div>
  <SwapTxnDetails
    v-else
    :txn-details="this.txnDetails"
    @goback="isVisible = true"
  />
</template>

<script>
const moment = require("moment");
import { mapState } from "vuex";
import SwapTxnDetails from "./swapTxnDetails.vue";

export default {
  name: "SwapTxnHistory",
  components: {
    SwapTxnDetails
  },
  props: {
    goback: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isVisible: true,
      refreshTxnHistory: "",
      txnDetails: ""
    };
  },
  created() {
    this.get_transaction_History();
  },
  computed: mapState({
    txnHistory: state => {
      console.log("txnHistory ::", state.gateway.txnHistory.result);
      return state.gateway.txnHistory.result;
    }
  }),

  methods: {
    backToSwap() {
      this.$emit("goback");
    },
    convertHumanReadableFormat(date) {
      return moment(date / 1000).format("DD MMM YYYY, h:mm:ss");
    },
    setTxnDetails(index) {
      this.txnDetails = this.txnHistory[index];
      this.isVisible = false;
    },
    downloadCsv() {
      let customizeCsv = [];
      let csv = "";
      this.txnHistory.length > 0 &&
        this.txnHistory.map(item => {
          let csvObj = {};
          csvObj.Status = item.status;
          csvObj.Date = moment(item.createdAt / 1000).format(
            "DD MMM YYYY-h:mm:ss"
          );
          csvObj.Exchange_Amount = item.amountExpectedFrom;
          csvObj.Exchange_rate = item.rate;
          csvObj.Receiver = item.payoutAddress;
          csvObj.Amount_Received = item.amountExpectedTo;
          customizeCsv.push(csvObj);
        });
      // Loop the array of objects
      for (let row = 0; row < customizeCsv.length; row++) {
        let keysAmount = Object.keys(customizeCsv[row]).length;
        let keysCounter = 0;
        // If this is the first row, generate the headings
        if (row === 0) {
          // Loop each property of the object
          for (let key in customizeCsv[row]) {
            // This is to not add a comma at the last cell
            // The '\r\n' adds a new line
            csv += key + (keysCounter + 1 < keysAmount ? "," : "\r\n");
            keysCounter++;
          }
        } else {
          for (let key in customizeCsv[row]) {
            csv +=
              customizeCsv[row][key] +
              (keysCounter + 1 < keysAmount ? "," : "\r\n");
            keysCounter++;
          }
        }

        keysCounter = 0;
      }

      const anchor = document.createElement("a");
      anchor.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
      anchor.target = "_blank";
      anchor.download = "Transaction report.csv";
      anchor.click();
    },
    get_transaction_History() {
      let data = {
        // id: this.createdTxnDetails.result.id
      };
      console.log("get_transaction_history data", data);
      // let count = 1;
      // this.refreshTxnHistory = setInterval(() => {
      //   console.log("get status ::", count++);

      // this.$gateway.send("swap", "transaction_history", data);

      // this.$gateway.send("swap", "transaction_status", data);
      this.$gateway.send("swap", "transaction_history", data);
      //   if (this.txnStatus.hasOwnProperty("result")) {
      //     console.log("txnStatustxnStatus ", this.txnStatus);
      //     if (this.txnStatus.result[0].status !== "waiting") {
      //       console.log(
      //         "txnStatustxnStatus 2",
      //         this.txnStatus.result[0].status
      //       );
      //       this.navigation("swapStatus", 4);
      //     }
      //   }
      // }, 30000);
    }
  }
};
</script>
