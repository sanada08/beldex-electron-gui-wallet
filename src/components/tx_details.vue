<template>
  <!-- <q-dialog v-model="isVisible" maximized> -->
  <!-- <q-dialog v-model="isVisible" maximized> -->

  <q-layout class="txn-details" style="min-height: unset;">
    <q-header>
      <q-toolbar>
        <!-- <q-btn flat round dense icon="" @click="isVisible = false" /> -->
        <q-btn flat round dense @click="isVisible = false">
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
        </q-btn>
        <q-toolbar-title>
          {{ $t("titles.details") }}
        </q-toolbar-title>
        <q-btn
          class="q-mr-sm"
          color="primary txnDetails"
          :label="$t('buttons.showTxDetails')"
          @click="showTxDetails"
        />
        <q-btn
          v-if="can_open"
          class="explorebtn"
          :label="$t('buttons.viewOnExplorer')"
          @click="openExplorer"
        />
      </q-toolbar>
    </q-header>
    <q-page class="detail-page" style="min-height: unset;">
      <div class="layout-padding">
        <div class="row items-center non-selectable">
          <div class="q-mr-sm">
            <TxTypeIcon :type="tx.type" :tooltip="false" />
          </div>

          <div v-if="tx.type == 'in'" :class="'tx-' + tx.type">
            {{
              $t("strings.transactions.description", {
                type: $t("strings.transactions.types.incoming")
              })
            }}
          </div>
          <div v-else-if="tx.type == 'out'" :class="'tx-' + tx.type">
            {{
              $t("strings.transactions.description", {
                type: $t("strings.transactions.types.outgoing")
              })
            }}
          </div>
          <div v-else-if="tx.type == 'pool'" :class="'tx-' + tx.type">
            {{
              $t("strings.transactions.description", {
                type: $t("strings.transactions.types.pendingIncoming")
              })
            }}
          </div>
          <div v-else-if="tx.type == 'pending'" :class="'tx-' + tx.type">
            {{
              $t("strings.transactions.description", {
                type: $t("strings.transactions.types.pendingOutgoing")
              })
            }}
          </div>
          <div v-else-if="tx.type == 'failed'" :class="'tx-' + tx.type">
            {{
              $t("strings.transactions.description", {
                type: $t("strings.transactions.types.failed")
              })
            }}
          </div>
        </div>

        <div class="justify-between" style="margin-top: 72px">
          <div class="infoBox">
            <div class="flex row justify-between">
              <div class="text">
                <span>{{ $t("strings.transactions.date") }}</span>
              </div>
              <div class="value">
                <span>{{ formatDate(tx.timestamp * 1000) }}</span>
              </div>
            </div>
          </div>
          <div class="hr-separator" />

          <div class="infoBox">
            <div class="flex row justify-between">
              <div class="text ft-Medium">
                <span>{{ $t("strings.transactions.amount") }}</span>
              </div>
              <div class="value">
                <span><FormatOxen :amount="tx.amount" raw-value/></span>
              </div>
            </div>
          </div>
          <div class="hr-separator" />

          <div class="infoBox">
            <div class="flex row justify-between">
              <div class="text ft-Medium">
                <span>
                  {{ $t("strings.transactions.fee") }}
                  <template v-if="tx.type == 'in' || tx.type == 'pool'">
                    ({{ $t("strings.transactions.paidBySender") }})
                  </template>
                </span>
              </div>
              <div class="value">
                <span><FormatOxen :amount="tx.fee" raw-value/></span>
              </div>
            </div>
          </div>
          <div class="hr-separator" />
          <div class="infoBox">
            <div class="flex row justify-between">
              <div class="text">
                <span>{{ $t("strings.blockHeight") }}</span>
              </div>
              <div class="value">
                <span>{{ tx.height }}</span>
              </div>
            </div>
          </div>
          <div class="hr-separator" />
        </div>

        <div class="infoBox">
          <div class="flex row justify-between">
            <div class="text">
              <span>{{ $t("strings.transactionID") }}</span>
              <!-- <span>{{ tx.txid }}</span> -->
              <div class="ft-Light q-mt-xs">{{ tx.txid }}</div>
            </div>
            <div class="value">
              <q-btn
                flat
                padding="sm"
                size="sm"
                icon="content_copy"
                class="q-mr-sm"
                color="green"
                @click="copyAddress(tx.txid)"
              >
                <q-tooltip
                  anchor="bottom right"
                  self="top right"
                  :offset="[0, 5]"
                >
                  {{ $t("menuItems.copyAddress") }}
                </q-tooltip>
              </q-btn>
            </div>
          </div>
        </div>

        <div class="hr-separator" />

        <!-- <h6 class="q-mt-xs q-mb-none text-weight-light">
          {{ $t("strings.transactionID") }}
        </h6>
        <p class="monospace break-all">{{ tx.txid }}</p> -->

        <!-- Deprecated, but leave this for old transactions -->
        <!-- <h6 class="q-mt-xs q-mb-none text-weight-light">
          {{ $t("strings.paymentID") }}
        </h6>
        <p class="monospace break-all">
          {{ tx.payment_id ? tx.payment_id : "N/A" }}
        </p> -->

        <div v-if="tx.type == 'in' || tx.type == 'pool'">
          <q-list no-border>
            <q-item header class="q-px-none">
              {{
                $t("strings.transactions.sentTo", {
                  type: $t("strings.transactions.types.incoming")
                })
              }}:
            </q-item>
            <q-item class="q-px-none">
              <q-item-label>
                <q-item-label class="non-selectable">{{
                  in_tx_address_used.address_index_text
                }}</q-item-label>
                <q-item-label class="monospace ellipsis">{{
                  in_tx_address_used.address
                }}</q-item-label>
              </q-item-label>
              <ContextMenu
                :menu-items="menuItems"
                @copyAddress="copyAddress(in_tx_address_used.address)"
              />
            </q-item>
          </q-list>
        </div>

        <div v-else-if="tx.type == 'out' || tx.type == 'pending'">
          <q-list no-border>
            <q-item header class="q-px-none">
              {{
                $t("strings.transactions.sentTo", {
                  type: $t("strings.transactions.types.outgoing")
                })
              }}:
            </q-item>
            <template v-if="out_destinations">
              <q-item
                v-for="destination in out_destinations"
                :key="destination.address"
                class="q-px-none"
              >
                <q-item-label>
                  <q-item-label>{{ destination.name }}</q-item-label>
                  <q-item-label class="monospace ellipsis">{{
                    destination.address
                  }}</q-item-label>
                  <q-item-label
                    ><FormatOxen :amount="destination.amount"
                  /></q-item-label>
                </q-item-label>
                <ContextMenu
                  :menu-items="menuItems"
                  @copyAddress="copyAddress(destination.address)"
                />
              </q-item>
            </template>
            <template v-else>
              <q-item class="q-px-none">
                <q-item-label>
                  <q-item-label header>{{
                    $t("strings.destinationUnknown")
                  }}</q-item-label>
                </q-item-label>
              </q-item>
            </template>
          </q-list>
        </div>
        <div class="label-txnNotes">
          {{ $t("fieldLabels.transactionNotes") }}
        </div>
        <q-input v-model="txNotes" type="textarea" rows="2" dense />

        <div class="flex row justify-center">
          <q-btn
            :disable="!is_ready"
            :text-color="theme == 'dark' ? 'white' : 'dark'"
            :label="$t('buttons.saveTxNotes')"
            color="primary"
            @click="saveTxNotes"
          />
        </div>
      </div>
    </q-page>
  </q-layout>
  <!-- </q-dialog> -->
</template>

<script>
const { clipboard } = require("electron");
import { mapState } from "vuex";
import { date } from "quasar";
import TxTypeIcon from "components/tx_type_icon";
import FormatOxen from "components/format_oxen";
import ContextMenu from "components/menus/contextmenu";
export default {
  name: "TxDetails",
  components: {
    TxTypeIcon,
    FormatOxen,
    ContextMenu
  },
  // props:['txnDetails'],
  data() {
    const menuItems = [
      { action: "copyAddress", i18n: "menuItems.copyAddress" }
    ];
    return {
      isVisible: false,
      txNotes: "",
      tx: {
        address: "",
        amount: 0,
        double_spend_seen: false,
        fee: 0,
        height: 0,
        note: "",
        // deprecated, but leave for older txs
        payment_id: "",
        subaddr_index: { major: 0, minor: 0 },
        timestamp: 0,
        txid: "",
        type: "",
        unlock_time: 0
      },
      menuItems
    };
  },
  computed: mapState({
    theme: state => state.gateway.app.config.appearance.theme,
    can_open(state) {
      const { net_type } = state.gateway.app.config.app;
      return net_type !== "stagenet";
    },
    in_tx_address_used(state) {
      let i;
      let used_addresses = state.gateway.wallet.address_list.primary.concat(
        state.gateway.wallet.address_list.used
      );
      for (i = 0; i < used_addresses.length; i++) {
        if (used_addresses[i].address_index == this.tx.subaddr_index.minor) {
          let address_index_text = "";
          if (used_addresses[i].address_index === 0) {
            address_index_text = this.$t("strings.addresses.primaryAddress");
          } else {
            address_index_text =
              this.$t("strings.addresses.subAddress") +
              " (" +
              this.$t("strings.addresses.subAddressIndex", {
                index: used_addresses[i].address_index
              }) +
              ")";
          }
          return {
            address: used_addresses[i].address,
            address_index: used_addresses[i].address_index,
            address_index_text: address_index_text
          };
        }
      }
      return false;
    },
    out_destinations(state) {
      if (!this.tx.destinations) return false;
      let i, j;
      let destinations = [];
      let address_book = state.gateway.wallet.address_list.address_book;
      for (i = 0; i < this.tx.destinations.length; i++) {
        let destination = this.tx.destinations[i];
        destination.name = "";
        for (j = 0; j < address_book.length; j++) {
          if (destination.address == address_book[j].address) {
            const { name, description } = address_book[j];
            const separator = description === "" ? "" : " - ";
            destination.name = `${name}${separator}${description}`;
            break;
          }
        }
        destinations.push(destination);
      }
      return destinations;
    },
    is_ready() {
      return this.$store.getters["gateway/isReady"];
    }
  }),
  methods: {
    showTxDetails() {
      this.$q
        .dialog({
          title: this.$t("dialog.transactionDetails.title"),
          message: JSON.stringify(this.tx, null, 2),
          ok: {
            label: this.$t("dialog.transactionDetails.ok"),
            color: "primary"
          },
          style: "min-width: 500px; overflow-wrap: break-word;",
          color: "#010101"
        })
        .onOk(() => {})
        .onCancel(() => {})
        .onDismiss(() => {});
    },
    openExplorer() {
      this.$gateway.send("core", "open_explorer", {
        type: "tx",
        id: this.tx.txid
      });
    },
    saveTxNotes() {
      this.$q.notify({
        timeout: 1000,
        type: "positive",
        message: this.$t("notification.positive.transactionNotesSaved")
      });
      this.$gateway.send("wallet", "save_tx_notes", {
        txid: this.tx.txid,
        note: this.txNotes
      });
    },
    formatDate(timestamp) {
      return date.formatDate(timestamp, "YYYY-MM-DD hh:mm a");
    },
    copyAddress(address) {
      clipboard.writeText(address);
      this.$q.notify({
        type: "positive",
        timeout: 1000,
        message: this.$t("notification.positive.addressCopied")
      });
    }
  }
};
</script>

<style lang="scss">
.txn-details {
  background-color: unset;
  .q-toolbar {
    background-color: unset;
    padding: unset;
  }
  .txnDetails {
    height: 45px;
  }
  .explorebtn {
    height: 45px;
    background-color: #32324a;
  }
  .q-header {
    background-color: transparent;
    border: none;
  }
  .q-header .q-toolbar__title {
    background: unset !important;
  }

  .q-field--standard .q-field__control:before {
    border-bottom: unset;
    transition: unset;
    border-top: 1px solid #484856;
    border-left: 1px solid #484856;
    border-right: 1px solid #484856;
  }
  .q-field--focused,
  .q-field--highlighted {
    border-bottom: unset;
    transition: unset;
    border-radius: 20px;
  }

  .label-txnNotes {
    color: white;
  }
  .q-field {
    margin: 10px 0;

    border-radius: 10px;
  }
}
</style>
