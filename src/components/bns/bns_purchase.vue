<template>
  <div class="bns-purchase">
    <div class="q-mb-lg q-px-md ">
      <div class="tab-desc">
        {{ $t("strings.bnsPurchaseDescription") }}
      </div>

      <BNSInput ref="input" />
    </div>
  </div>
</template>

<script>
import BNSInput from "./bns_input";
export default {
  name: "BNSPurchase",
  components: {
    BNSInput
  },
  methods: {
    startUpdating(record) {
      this.$refs.input.startUpdating(record);
    },
    startRenewing(record) {
      this.$refs.input.startRenewing(record);
    }
  }
};
</script>
<style lang="scss">
.bns-purchase {
  .description {
    white-space: pre-line;
    // oxen-navy
    color: #010101;
  }

  .prices,
  .idSelectorWrapper {
    // oxen-navy
    margin-top: 20px;
    background-color: #32324a;
    padding: 15px;
    color: white;
    border-radius: 10px;
  }
  .pricelabel {
    font-weight: 600;
    font-size: 16px;
  }
  .bnsname {
    color: #20d030;
    font-weight: 600;
  }
  .tag {
    // width: 32%;
    width: 23.7%;
    height: 50px;
    background-color: #40405d;
    border-radius: 7px;
    padding: 10px;
    font-weight: 500;

    font-size: 12px;
    cursor: pointer;
    .amount {
      background-color: #484866;
      color: #20d030;
      padding: 3px 5px;
      border-radius: 4px;
      font-weight: 600;
    }
  }
  .selected {
    border: 2px solid #00ad07;
  }
  .idSelectorWrapper {
    .tag {
      width: 32.1%;
      margin-bottom: 0;
      font-size: 14px;
    }
  }
}
</style>
