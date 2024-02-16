<template>
  <div class="bns-record-list">
    <div class="decrypt row justify-between ">
      <OxenField
        :label="$t('fieldLabels.decryptRecord')"
        :disable="decrypting"
        :error="$v.name.$error"
      >
        <q-input
          v-model.trim="name"
          :dark="theme == 'dark'"
          borderless
          dense
          :placeholder="$t('placeholders.bnsDecryptName')"
          :disable="decrypting"
          @blur="$v.name.$touch"
        />
      </OxenField>
      <div class="btn-wrapper q-ml-md  items-end">
        <q-btn
          color="primary"
          :label="$t('buttons.addRecord')"
          :loading="decrypting"
          @click="decrypt()"
        />
      </div>
    </div>
    <!-- <div v-if="bchat_records.length > 0" class="records-group">
      <span class="record-type-title">{{ $t("titles.bnsBchatRecords") }}</span>
      <BNSRecordList
        :record-list="bchat_records"
        :is-belnet="false"
        @onUpdate="onUpdate"
      />
    </div> -->
    <div v-if="bns_record.length > 0" class="records-group">
      <span class="record-type-title">BNS Records </span>
      <BNSRecordList
        :record-list="bns_record"
        :is-belnet="true"
        @onUpdate="onUpdate"
        @onRenew="onRenew"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import OxenField from "components/oxen_field";
import { bchat_name_or_belnet_name } from "src/validators/common";
import BNSRecordList from "./bns_record_list";

export default {
  name: "BNSRecords",
  components: {
    OxenField,
    BNSRecordList
  },
  data() {
    return {
      name: "",
      decrypting: false
    };
  },
  mounted() {
    this.$gateway.send("wallet", "bns_known_names");
  },
  computed: mapState({
    theme: state => state.gateway.app.config.appearance.theme,
    ourAddresses(state) {
      const { address_list } = state.gateway.wallet;
      const { used, unused, primary } = address_list;
      const all = [...used, ...unused, ...primary];
      return all.map(a => a.address).filter(a => !!a);
    },
    // bchat_records(state) {
    //   return this.records_of_type(state, "bchat");
    // },
    // belnet_records(state) {
    //   return this.records_of_type(state, "belnet");
    // },
    bns_record(state) {
      return this.records_of_type(state);
    },
    needsDecryption() {
      // const records = [...this.belnet_records, ...this.bchat_records];
      const records = [...this.bns_record];
      return records.find(r => this.isLocked(r));
    }
  }),
  methods: {
    records_of_type(state) {
      // console.log("type..:", type);
      // receives the type and returns the records of that type
      const ourAddresses = this.ourAddresses;
      const records = state.gateway.wallet.bnsRecords;
      // console.log("records_of_type ::", records);

      const ourRecords = records.filter(record => {
        return (
          ourAddresses.includes(record.owner) ||
          ourAddresses.includes(record.backup_owner)
        );
      });

      // Sort the records by decrypted ones first, followed by non-decrypted
      return ourRecords.sort((a, b) => {
        if (a.name && !b.name) {
          return -1;
        } else if (b.name && !a.name) {
          return 1;
        } else if (a.name && b.name) {
          return a.name.localeCompare(b.name);
        }
        return b.update_height - a.update_height;
      });
    },
    isLocked(record) {
      return !record.name || !record.value;
    },
    onUpdate(record) {
      this.$emit("onUpdate", record);
    },
    onRenew(record) {
      this.$emit("onRenew", record);
    },
    decrypt() {
      this.$v.name.$touch();

      if (!this.name || this.name.trim().length === 0) {
        this.$q.notify({
          type: "negative",
          timeout: 3000,
          message: this.$t("notification.errors.enterName")
        });
        return;
      }

      if (this.$v.name.$error) {
        this.$q.notify({
          type: "negative",
          timeout: 3000,
          message: this.$t("notification.errors.invalidNameFormat")
        });
        return;
      }

      const name = this.name.trim().toLowerCase();

      this.$gateway.once("decrypt_record_result", data => {
        if (data.decrypted) {
          this.$q.notify({
            type: "positive",
            timeout: 2000,
            message: this.$t("notification.positive.decryptedBNSRecord", {
              name
            })
          });
          this.name = "";
        } else {
          this.$q.notify({
            type: "negative",
            timeout: 3000,
            message: this.$t("notification.errors.decryptBNSRecord", { name })
          });
        }
        this.decrypting = false;
      });

      let type = "bchat";
      // // bchat names cannot have a "." so this is safe
      // if (name.endsWith(".bdx")) {
      //   type = "belnet";
      // }

      this.$gateway.send("wallet", "decrypt_record", {
        name,
        type
      });
      this.decrypting = true;
    }
  },

  validations: {
    name: {
      bchat_name_or_belnet_name
    }
  }
};
</script>

<style lang="scss">
.bns-record-list {
  .height {
    font-size: 0.9em;
  }
  .q-item {
    cursor: cursor;
  }

  .oxen-field {
    flex: 1;
  }

  .decrypt {
    height: 100px;
    margin-bottom: 20px;

    .btn-wrapper {
      height: 50px;
      margin-top: 60px;
    }
  }
}
</style>
