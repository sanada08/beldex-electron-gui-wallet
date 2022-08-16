<template>
  <div class="bns-record-list">
    <div v-if="needsDecryption" class="decrypt row justify-between items-end">
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
      <div class="btn-wrapper q-ml-md row items-center">
        <q-btn
          color="primary"
          :label="$t('buttons.decrypt')"
          :loading="decrypting"
          @click="decrypt()"
        />
      </div>
    </div>
    <div v-if="bchat_records.length > 0" class="records-group">
      <span class="record-type-title">{{ $t("titles.bnsBchatRecords") }}</span>
      <BNSRecordList
        :record-list="bchat_records"
        :is-belnet="false"
        @onUpdate="onUpdate"
      />
    </div>
    <div v-if="belnet_records.length > 0" class="records-group">
      <span class="record-type-title">{{ $t("titles.bnsBelnetRecords") }}</span>
      <BNSRecordList
        :record-list="belnet_records"
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
    bchat_records(state) {
      return this.records_of_type(state, "bchat");
    },
    belnet_records(state) {
      return this.records_of_type(state, "belnet");
    },
    needsDecryption() {
      const records = [...this.belnet_records, ...this.bchat_records];
      return records.find(r => this.isLocked(r));
    }
  }),
  methods: {
    records_of_type(state, type) {
      // receives the type and returns the records of that type
      const ourAddresses = this.ourAddresses;
      const records = state.gateway.wallet.bnsRecords;
      const ourRecords = records.filter(record => {
        return (
          record.type === type &&
          (ourAddresses.includes(record.owner) ||
            ourAddresses.includes(record.backup_owner))
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
      // bchat names cannot have a "." so this is safe
      if (name.endsWith(".bdx")) {
        type = "belnet";
      }

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
    cursor: default;
  }

  .oxen-field {
    flex: 1;
  }

  .decrypt {
    margin-bottom: 20px;

    .btn-wrapper {
      height: 46px;
    }
  }
}
</style>
