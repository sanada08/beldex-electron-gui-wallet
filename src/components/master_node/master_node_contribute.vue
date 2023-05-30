<template>
  <div class="master-node-stake-tab">
    <div class="q-pa-md">
      <div class="row align-items sn-contribution-info">
        <div class="col-md-9">
          <div class="header">{{ $t("titles.availableForContribution") }}</div>
          <div v-if="awaitingMasterNodes.length == 0" class="info-txt">
            {{ $t("strings.noMasterNodesCurrentlyAvailable") }}
          </div>
        </div>
        <div
          class="col-md-3"
          style="    display: flex;
    align-items: center;
    justify-content: center;"
        >
          <q-btn
            class="float-right vertical-top bg-secondary"
            size="md"
            icon="refresh"
            :label="$t('buttons.refresh')"
            @click="updateMasterNodeList"
          />
        </div>
      </div>
      <div v-if="awaitingMasterNodes.length > 0">
        <MasterNodeList
          v-if="awaitingMasterNodes"
          :master-nodes="awaitingMasterNodes"
          button-i18n="buttons.stake"
          :details="details"
          :action="contributeToNode"
        />
      </div>
    </div>
    <MasterNodeDetails
      ref="masterNodeDetailsContribute"
      :action="contributeToNode"
      action-i18n="buttons.stake"
    />
    <q-inner-loading :showing="fetching" :dark="theme == 'dark'">
      <q-spinner color="primary" size="30" />
    </q-inner-loading>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MasterNodeList from "./master_node_list";
import MasterNodeDetails from "./master_node_details";
export default {
  name: "MasterNodeContribute",
  components: {
    MasterNodeList,
    MasterNodeDetails
  },
  props: {
    awaitingMasterNodes: {
      type: Array,
      required: true
    }
  },
  computed: mapState({
    theme: state => state.gateway.app.config.appearance.theme,
    fetching: state => state.gateway.daemon.master_nodes.fetching
  }),
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    contributeToNode(node, event) {
      // stop detail page from popping up
      event.stopPropagation();
      this.scrollToTop();
      const key = node.master_node_pubkey;
      const minContribution = node.minContribution;
      // close the detail popup if it's open
      this.$refs.masterNodeDetailsContribute.isVisible = false;
      this.$emit("contribute", key, minContribution);
      this.$q.notify({
        type: "positive",
        timeout: 1000,
        message: this.$t("notification.positive.masterNodeInfoFilled")
      });
    },
    details(node) {
      this.$refs.masterNodeDetailsContribute.isVisible = true;
      this.$refs.masterNodeDetailsContribute.node = node;
    },
    updateMasterNodeList() {
      this.$gateway.send("wallet", "update_master_node_list");
    }
  }
};
</script>

<style lang="scss">
.sn-contribution-info {
  > * {
    line-height: 30px;
    margin: 20 400;
  }
  margin-bottom: 6px;
}

.master-node-stake-tab .q-btn .q-icon {
  color: white;
}
.info-txt {
  color: #afafbe;
}
</style>
