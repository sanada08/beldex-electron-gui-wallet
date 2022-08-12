<template>
  <div class="bns-purchase">
    <div class="q-mb-lg q-px-md q-pt-md">
      <div class="tab-desc">
        {{ $t("strings.bnsPurchaseDescription") }}
      </div>
      <div class="prices">
        {{ $t("strings.bns.prices") }}
        <table>
          <tr>
            <td>{{ $t("strings.bns.sessionID") }}:</td>
            <td>15 BDX</td>
          </tr>
          <tr>
            <td>{{ $t("strings.bns.belnetName1Year") }}:</td>
            <td>15 BDX</td>
          </tr>
          <tr>
            <td>{{ $t("strings.bns.belnetNameXYears", { years: 2 }) }}:</td>
            <td>30 BDX</td>
          </tr>
          <tr>
            <td>{{ $t("strings.bns.belnetNameXYears", { years: 5 }) }}:</td>
            <td>60 BDX</td>
          </tr>
          <tr>
            <td>{{ $t("strings.bns.belnetNameXYears", { years: 10 }) }}:</td>
            <td>90 BDX</td>
          </tr>
        </table>
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

  .prices {
    // oxen-navy
    margin-top: 20px;
    color: #ff0000;
  }
}
</style>
