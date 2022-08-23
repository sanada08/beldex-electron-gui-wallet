<template>
  <div class="my-bns">
    <div class="q-px-md q-pt-md">
      <div class="tab-desc">
        {{ $t("strings.bnsDescription") }}
      </div>
      <BNSRecords @onUpdate="onUpdate" @onRenew="onRenew" />
    </div>
  </div>
</template>

<script>
import BNSRecords from "./bns_records";

export default {
  name: "MyBNS",
  components: {
    BNSRecords
  },
  methods: {
    onUpdate(record) {
      this.$emit("onUpdate", record);
    },
    onRenew(record) {
      this.$emit("onRenew", record);
    }
  }
};
</script>

<style lang="scss">
.my-bns {
  .description {
    white-space: pre-line;
    color: #cecece;
    margin-bottom: 8px;
  }
}
</style>
