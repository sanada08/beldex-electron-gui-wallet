<template>
  <q-page class="master-node-page">
    <div class="header row items-center justify-left q-pt-md">
      <q-btn-toggle
        v-model="screen"
        toggle-color="primary"
        color="accent"
        :options="[
          {
            label: $t('titles.masterNode.myStakes'),
            value: 'myStakes'
          },
          {
            label: $t('titles.masterNode.staking'),
            value: 'staking'
          },
          {
            label: $t('titles.masterNode.registration'),
            value: 'registration'
          }
        ]"
      />
    </div>
    <MasterNodeUnlock v-if="screen === 'myStakes'" />
    <MasterNodeStaking v-if="screen === 'staking'" />
    <MasterNodeRegistration v-if="screen === 'registration'" />
  </q-page>
</template>

<script>
import MasterNodeStaking from "components/master_node/master_node_staking";
import MasterNodeRegistration from "components/master_node/master_node_registration";
import MasterNodeUnlock from "components/master_node/master_node_unlock";
export default {
  components: {
    MasterNodeStaking,
    MasterNodeRegistration,
    MasterNodeUnlock
  },
  data() {
    return {
      screen: "staking"
    };
  }
};
</script>

<style lang="scss"></style>
