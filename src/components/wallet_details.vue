<template>
  <div class="column wallet-info">
    <div class="row justify-between items-center wallet-header">
      <div class="title">{{ info.name }}</div>
      <WalletSettings />
    </div>
    <div class="wallet-content oxen-navy">
      <div class="row justify-center">
        <div class="funds column items-center">
          <div class="balance">
            <div class="text">
              <span>{{ $t("strings.oxenBalance") }}</span>
            </div>
            <div class="value">
              <span><FormatOxen :amount="info.balance"/></span>
            </div>
          </div>
          <div class="row unlocked">
            <span
              >{{ $t("strings.oxenUnlockedShort") }}:
              <FormatOxen :amount="info.unlocked_balance"
            /></span>

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
        </div>
      </div>
      <div class="wallet-address row justify-center items-center">
        <div class="address">{{ info.address }}</div>
        <CopyIcon :content="info.address" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FormatOxen from "components/format_oxen";
import WalletSettings from "components/menus/wallet_settings";
import CopyIcon from "components/icons/copy_icon";
export default {
  name: "WalletDetails",
  components: {
    FormatOxen,
    WalletSettings,
    CopyIcon
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
    margin-top: 15px;
    border-radius: 10px;
    .balance {
      .text {
        font-size: 16px;
      }
      .value {
        font-size: 35px;
      }
    }

    .wallet-address {
      margin-top: 12px;
      .address {
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 4px 0;
        background: #45455a;
        padding: 15px;
        border-radius: 10px;
      }
      .q-btn {
        margin-left: 8px;
      }
    }

    .unlocked {
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>
