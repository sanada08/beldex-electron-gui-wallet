<template>
  <div class="column wallet-info">
    <div
      class="row justify-between items-center wallet-header"
      style="height: 92px"
    >
      <!-- <div class="title">{{ info.name }}</div> -->
      <!-- <WalletSettings /> -->
      <div></div>
    </div>
    <div class="wallet-content oxen-navy">
      <div class="flex row justify-between items-center">
        <article class="flex row justify-center items-center">
          <div style="margin-top: 5px; margin-right: 5px">
            <svg
              width="18"
              height="18"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 0.375C6.93603 0.375 0.375 6.93603 0.375 15C0.375 23.064 6.93603 29.625 15 29.625C23.064 29.625 29.625 23.064 29.625 15C29.625 6.93603 23.064 0.375 15 0.375ZM15 2.625C21.8467 2.625 27.375 8.15332 27.375 15C27.375 21.8467 21.8467 27.375 15 27.375C8.15332 27.375 2.625 21.8467 2.625 15C2.625 8.15332 8.15332 2.625 15 2.625ZM15 6C11.9062 6 9.375 8.53125 9.375 11.625C9.375 13.3301 10.1704 14.8462 11.3789 15.8789C8.84766 17.1929 7.125 19.8384 7.125 22.875H9.375C9.375 19.7549 11.8799 17.25 15 17.25C18.1201 17.25 20.625 19.7549 20.625 22.875H22.875C22.875 19.8384 21.1523 17.1929 18.6211 15.8789C19.8296 14.8462 20.625 13.3301 20.625 11.625C20.625 8.53125 18.0938 6 15 6ZM15 8.25C16.8765 8.25 18.375 9.74854 18.375 11.625C18.375 13.5015 16.8765 15 15 15C13.1235 15 11.625 13.5015 11.625 11.625C11.625 9.74854 13.1235 8.25 15 8.25Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="title ft-semibold">{{ info.name }}</div>
        </article>

        <div>
          <q-btn
            class="balance-button"
            label="Fetch Balance & Transaction"
            color="primary"
            @click="get_balance()"
          >
          </q-btn>
        </div>
      </div>
      <article class="decoration q-my-md">
        <div class="wallet-address row justify-center items-center">
          <div class="ft-semibold title">Address</div>
          <div class="address ft-Light">{{ info.address }}</div>
          <q-btn
            flat
            padding="sm"
            size="md"
            icon="content_copy"
            class="q-mr-sm"
            color="green"
            @click="copyAddress(info.address)"
          >
            <q-tooltip anchor="bottom right" self="top right" :offset="[0, 5]">
              {{ $t("menuItems.copyAddress") }}
            </q-tooltip>
          </q-btn>
          <!-- <CopyIcon :content="info.address" /> -->
        </div>

        <div class="">
          <div class="funds flex row justify-between q-px-md balance">
            <article class="row items-center">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.55953 0.31781C2.52315 0.31781 0.845703 1.86568 0.845703 3.74475V18.5948C0.845703 19.8571 1.95366 20.8795 3.32159 20.8795H20.6528C22.0207 20.8795 23.1287 19.8571 23.1287 18.5948V7.17169C23.1287 5.90944 22.0207 4.88707 20.6528 4.88707H7.03541H4.55953C3.86006 4.88707 3.32159 4.39019 3.32159 3.74475C3.32159 3.09931 3.86006 2.60244 4.55953 2.60244H21.8907V0.31781H4.55953ZM19.4148 11.741C20.0982 11.741 20.6528 12.2527 20.6528 12.8833C20.6528 13.5138 20.0982 14.0256 19.4148 14.0256C18.7315 14.0256 18.1769 13.5138 18.1769 12.8833C18.1769 12.2527 18.7315 11.741 19.4148 11.741Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="value ft-semibold">
                <span><FormatOxen :amount="info.balance"/></span>
              </div>
            </article>
            <article class="flex items-center">
              <!-- <div class="balance">
            <div class="text">
              <span>{{ $t("strings.oxenBalance") }}</span>
            </div>
            <div class="value">
              <span><FormatOxen :amount="info.balance"/></span>
            </div>
          </div> -->
              <div class="row unlocked ft-semibold">
                <span
                  >{{ $t("strings.oxenUnlockedBalance") }}:
                  {{ info.unlocked_balance }}
                  <!-- <FormatOxen :amount="info.unlocked_balance" -->
                </span>

                <!--  </div>
          <div class="row">
            <div v-if="load_balance">
                <q-btn
                  class="balance-button"
                  label="Fetching Balance & Txn..."
                  color="primary"
                  @click="get_balance()"
                >
                </q-btn>
              </div>
              <div v-if="!load_balance">
                <q-btn
                  class="balance-button"
                  label="Fetch Balance & Txn"
                  color="primary"
                  @click="get_balance()"
                >
                </q-btn>
              </div> -->
              </div>
            </article>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
const { clipboard } = require("electron");
import { mapState } from "vuex";
import FormatOxen from "components/format_oxen";
// import WalletSettings from "components/menus/wallet_settings";
// import CopyIcon from "components/icons/copy_icon";
export default {
  name: "WalletDetails",
  components: {
    FormatOxen
    // WalletSettings,
    // CopyIcon
  },
  computed: mapState({
    theme: state => state.gateway.app.config.appearance.theme,
    info: state => state.gateway.wallet.info,
    load_balance: state => {
      return state.gateway.wallet.info.load_balance;
    }
  }),
  methods: {
    get_balance() {
      this.$store.commit("gateway/set_wallet_data", {
        info: {
          load_balance: true
        }
      });
      this.$gateway.send("wallet", "get_balance");
    },
    copyAddress(text) {
      clipboard.writeText(text);
      this.$q.notify({
        type: "positive",
        timeout: 2000,
        message: this.$t("notification.positive.addressCopied")
      });
    }
  }
};
</script>

<style lang="scss">
.wallet-info {
  .wallet-header {
    padding: 0.8rem 1.5rem;
    .title {
      font-weight: bold;
    }
  }

  .wallet-content {
    text-align: center;
    padding: 2em;
    background: #2f2f40;
    margin-bottom: 15px;
    // margin-top: 15px;
    border-radius: 10px;

    .balance {
      .text {
        font-size: 16px;
      }
      .value {
        // font-size: 35px;
        font-size: 26px;
        margin-left: 10px;
      }
    }
    .decoration {
      border: 2px solid #41415b;
      border-radius: 20px;
    }
    .wallet-address {
      background-color: #32324a;
      border-radius: 10px;
      width: 97%;
      margin: 12px auto;

      .address {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 4px 0;
        // background: #45455a;
        padding: 15px;
        width: 83%;
        color: #afafbe;
      }
      .title {
        font-size: 1.15em;
      }
      .q-btn {
        margin-left: 8px;
      }
    }
    .title {
      font-size: 20px;
    }
    .q-btn {
      font-size: 14px;
    }

    .unlocked {
      font-size: 16px;
      font-weight: 500;
      color: #afafbe;
    }
  }
}
</style>
