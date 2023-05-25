<template>
  <q-page class="transactionBox" style="min-height: unset">
    <template v-if="this.tx_list.length === 0">
      <div
        class="col-2 ft-semibold txn-title q-ml-sm q-mt-sm"
        style="color:white"
      >
        {{ $t("titles.transactions") }}
      </div>
      <section
        class="flex column justify-center items-center"
        style="height: 45vh"
      >
        <div>
          <img src="../../assets/images/No_transaction.svg" height="119px" />
        </div>
        <p class="q-pa-md q-mb-none qtab-desc ft-semibold infoTxt">
          {{ $t("strings.noTransactionsFound") }}
        </p>

        <div class="hint-txt">After your first transaction,</div>
        <div class="hint-txt">you will be able to view it here.</div>
      </section>
    </template>
    <section v-else-if="this.tx_list.length !== 0 && !this.txnDetails">
      <div
        class="row q-pt-sm q-mx-md q-mb-sm items-center flex color-white justify-between"
      >
        <div class="col-2 ft-semibold txn-title">
          {{ $t("titles.transactions") }}
        </div>
        <section class="searchBox flex row col-8">
          <article class="flex row items-center col-9">
            <div class="col-1 filter-txt ft-semibold">
              {{ $t("fieldLabels.filter") }}
            </div>
            <OxenField class="col-11 q-px-sm">
              <q-input
                v-model="tx_filter"
                :placeholder="$t('placeholders.filterTx')"
                borderless
                dense
              />
            </OxenField>
          </article>

          <OxenField class="col-3">
            <q-select
              v-model="tx_type"
              :options="tx_type_options"
              borderless
              dense
              emit-value
              map-options
              class="ft-semibold"
            />
          </OxenField>
        </section>
      </div>
      <TxList
        :type="tx_type"
        :filter="tx_filter"
        @submitTxDetails="submitTxDetails($event)"
      />
    </section>
    <section v-else>
      <!-- <section > -->

      <TxDetails :tx="this.txnDetails" @goback="goback($event)" />
    </section>
  </q-page>
</template>
<script>
import { mapState } from "vuex";
import TxList from "components/tx_list";
import OxenField from "components/oxen_field";
import TxDetails from "components/tx_details";

export default {
  components: {
    TxList,
    OxenField,
    TxDetails
  },
  data() {
    return {
      tx_type: "all",
      tx_filter: "",
      txnDetails: "",
      tx_type_options: [
        {
          label: this.$t("strings.transactions.types.all"),
          value: "all"
        },
        {
          label: this.$t("strings.transactions.types.incoming"),
          value: "in"
        },
        {
          label: this.$t("strings.transactions.types.outgoing"),
          value: "out"
        },
        {
          label: this.$t("strings.transactions.types.pending"),
          value: "all_pending"
        },
        {
          label: this.$t("strings.transactions.types.miner"),
          value: "miner"
        },
        {
          label: this.$t("strings.transactions.types.masterNode"),
          value: "mnode"
        },
        {
          label: this.$t("strings.transactions.types.governance"),
          value: "gov"
        },
        {
          label: this.$t("strings.transactions.types.stake"),
          value: "stake"
        },
        {
          label: this.$t("strings.transactions.types.failed"),
          value: "failed"
        }
      ]
    };
  },
  methods: {
    submitTxDetails(details) {
      // this.$ref.txDetails.tx = details;
      this.txnDetails = details;
      console.log("submitTxDetails ::", this.tx_details);
    },
    goback(data) {
      this.txnDetails = data;
      console.log("submitTxDetails ::goback", data);
    }
  },

  computed: mapState({
    theme: state => state.gateway.app.config.appearance.theme,
    tx_list: state => state.gateway.wallet.transactions.tx_list
  })
};
</script>

<style lang="scss">
.color-white {
  color: white;
}
.txn-title {
  font-size: 18px;
}
.filter-txt {
  font-size: 16px;
}
.searchBox .oxen-field .content {
  min-height: 45px !important;
  height: 45px !important;
  background-color: #32324a;
  margin-bottom: unset !important;
  border: unset;
}
.infoTxt {
  color: white;
}
.hint-txt {
  color: #82828d;
}
</style>
