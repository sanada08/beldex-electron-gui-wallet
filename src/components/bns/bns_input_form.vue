<template>
  <div class="bns-input-form">
    <div class="prices">
      <span class="pricelabel">
        <span class="bnsname q-mr-sm">BNS</span>
        {{ $t("strings.bns.prices") }}
      </span>
      <section class="flex row no-wrap q-mt-xs q-gutter-sm">
        <div
          v-for="item in typeOptions"
          :key="item.type"
          :class="[record.years == item.value ? 'selected' : '']"
          class="flex row tag items-center justify-between no-wrap"
          @click="record.years = item.value"
        >
          <div>{{ item.label }}</div>
          <div class="amount">{{ item.amount }}</div>
        </div>
        <!-- <div
            class="flex row tag items-center justify-between  no-wrap"
          >
            <div>{{ $t("strings.bns.belnetName1Year") }}</div>
            <div class="amount">15 BDX</div>
          </div>
          <div class="flex row tag items-center justify-between no-wrap">
            <div>{{ $t("strings.bns.belnetNameXYears", { years: 2 }) }}</div>
            <div class="amount">30 BDX</div>
          </div>
          <div class="flex row tag items-center justify-between no-wrap">
            <div>{{ $t("strings.bns.belnetNameXYears", { years: 5 }) }}</div>
            <div class="amount">60 BDX</div>
          </div>
          <div
            class="flex row tag items-center justify-between q-mr-sm q-ml-sm no-wrap"
          >
            <div>{{ $t("strings.bns.belnetNameXYears", { years: 10 }) }}</div>
            <div class="amount">90 BDX</div>
        </div>-->
      </section>
    </div>
    <!-- Type -->
    <!-- <div class="col q-mt-sm">
      <OxenField :label="$t('fieldLabels.bnsType')" :disable="updating">
        <q-select
          v-model.trim="record.type"
          emit-value
          map-options
          :options="renewing ? belnetOptions : typeOptions"
          :disable="updating"
          borderless
          dense
        />
      </OxenField>
    </div>-->
    <!-- Name -->
    <div class="col q-mt-sm">
      <OxenField
        :label="$t('fieldLabels.name')"
        :disable="disableName"
        :error="$v.record.name.$error"
      >
        <!-- :suffix="record.type === 'bchat' ? '' : '.bdx'" -->

        <q-input
          v-model.trim="record.name"
          :dark="theme == 'dark'"
          :placeholder="$t('placeholders.bnsName')"
          :disable="disableName"
          borderless
          dense
          :suffix="'.bdx'"
          @blur="$v.record.name.$touch"
        />
      </OxenField>
    </div>
    <div class="notes q-mt-xs">Note: BNS Name for registration</div>
    <!-- Value (Bchat ID, Wallet Address or .bdx address) -->
    <!-- <div class="col q-mt-sm">
      <OxenField
        class="q-mt-md"
        :label="value_field_label"
        :error="$v.record.value.$error"
      >
        <q-input
          v-model.trim="record.value"
          :dark="theme == 'dark'"
          :placeholder="value_placeholder"
          borderless
          dense
          :disable="renewing"
          :suffix="record.type === 'bchat' ? '' : '.bdx'"
          @blur="$v.record.value.$touch"
        />
      </OxenField>
    </div>-->

    <!-- Owner -->
    <div class="col q-mt-sm">
      <OxenField
        class="q-mt-md"
        :label="$t('fieldLabels.owner')"
        :error="$v.record.owner.$error"
        optional
      >
        <q-input
          v-model.trim="record.owner"
          :dark="theme == 'dark'"
          :placeholder="owner_placeholder"
          borderless
          dense
          :disable="renewing"
          @blur="$v.record.owner.$touch"
        />
      </OxenField>
    </div>
    <div class="notes q-mt-xs">
      Note: Use current address (leave blank if same wallet) or specify the
      address if it is a different wallet
    </div>

    <!-- Backup owner -->
    <div class="col q-mt-sm">
      <OxenField
        class="q-mt-md"
        :label="$t('fieldLabels.backupOwner')"
        :error="$v.record.backup_owner.$error"
        optional
      >
        <q-input
          v-model.trim="record.backup_owner"
          :dark="theme == 'dark'"
          :placeholder="$t('placeholders.bnsBackupOwner')"
          :disable="renewing"
          borderless
          dense
          @blur="$v.record.backup_owner.$touch"
        />
      </OxenField>
    </div>
    <div class="notes q-mt-xs">
      Note: Use current address (leave blank if same wallet) or specify backup
      address
    </div>
    <!-- <BNSAddressSelection :parentValue="parentValue" @update-parent="updateParentValue" /> -->

    <div
      class="idSelectorWrapper"
      :class="[idsValidation ? 'errorborder' : '']"
    >
      <section>
        <div
          class="flex row items-center no-wrap q-pa-sm q-mb-sm selectionBox"
          :class="[addressRef ? 'selected' : '']"
        >
          <!-- style="width: 140px" -->

          <q-checkbox v-model="addressRef" size="sm" color="green" />
          <div style="width: 100px">Address</div>
          <OxenField class="full-width" optional :error="$v.address.$error">
            <q-input
              v-model="address"
              :disable="!addressRef"
              :dark="theme == 'dark'"
              placeholder="Address"
              borderless
              dense
              @blur="$v.address.$touch"
            />
          </OxenField>
          <!-- <q-radio
          keep-color
          v-model="selectedId"
          val="Address"
          label="Address"
          color="green"
          />-->
        </div>
        <div
          class="flex row items-center no-wrap q-pa-sm q-mb-sm selectionBox"
          :class="[bchatIdRef ? 'selected' : '']"
        >
          <q-checkbox v-model="bchatIdRef" size="sm" color="green" />
          <div style="width: 100px">BChat ID</div>
          <OxenField class="full-width" optional :error="$v.bchatId.$error">
            <q-input
              v-model="bchatId"
              :disable="!bchatIdRef"
              :dark="theme == 'dark'"
              placeholder="BChat ID"
              borderless
              dense
              @blur="$v.bchatId.$touch"
            />
          </OxenField>
          <!-- <q-radio
          keep-color
          v-model="selectedId"
          val="BChat ID"
          label="BChat ID"
          color="green"
          />-->
        </div>
        <div
          class="flex row items-center no-wrap q-pa-sm selectionBox"
          :class="[belnetIdRef ? 'selected' : '']"
        >
          <q-checkbox v-model="belnetIdRef" size="sm" color="green" />
          <div style="width: 100px">Belnet ID</div>
          <OxenField class="full-width" optional :error="$v.belnetId.$error">
            <q-input
              v-model="belnetId"
              :disable="!belnetIdRef"
              :dark="theme == 'dark'"
              placeholder="Belnet ID"
              borderless
              dense
              @blur="$v.belnetId.$touch"
            />
          </OxenField>
          <!-- <q-radio
          keep-color
          v-model="selectedId"
          val="Belnet ID"
          label="Belnet ID"
          color="green"
          />-->
        </div>
      </section>
      <!-- <div class="col q-mt-sm">
      <OxenField v-if="selectedId" class="q-mt-md" optional>
        <q-input
          :dark="theme == 'dark'"
          :placeholder="selectedId"
          borderless
          dense
        />
      </OxenField>
      </div>-->
    </div>
    <!-- :disable="!is_able_to_send || disableSubmitButton || !can_update ||!record.name" -->

    <div class="buttons flex justify-center q-mt-sm">
      <q-btn
        color="primary"
        :disable="!is_ready"
        :label="submitLabel"
        @click="submit()"
      />
      <q-btn
        v-if="showClearButton"
        color="accent"
        :label="$t('buttons.clear')"
        @click="clear()"
      />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { mapState } from "vuex";
import { required, maxLength } from "vuelidate/lib/validators";
import {
  address,
  bchat_id,
  belnet_address,
  bns_name
  // belnet_name,
  // bchat_name
} from "src/validators/common";
import OxenField from "components/oxen_field";
import WalletPassword from "src/mixins/wallet_password";

export default {
  name: "BNSInputForm",
  components: {
    OxenField
    // BNSAddressSelection
  },
  setup() {
    // const selectedId = ref();
    return {
      // selectedId: ref(""),
      bchatIdRef: ref(false),
      belnetIdRef: ref(false),
      addressRef: ref(false)
    };
  },
  mixins: [WalletPassword],
  props: {
    submitLabel: {
      type: String,
      required: true
    },
    updating: {
      type: Boolean,
      required: true
    },
    renewing: {
      type: Boolean,
      required: false,
      default: false
    },
    disableType: {
      type: Boolean,
      required: false,
      default: false
    },
    disableName: {
      type: Boolean,
      required: false,
      default: false
    },
    showClearButton: {
      type: Boolean,
      required: false,
      default: false
    },
    disableSubmitButton: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    // let bchatOptions = [
    //   // {
    //   //   label: this.$t("strings.bns.bchatID"),
    //   //   value: "bchat",
    //   //   amount: "15 bdx"
    //   // }
    // ];
    let belnetOptions = [
      {
        // label: this.$t("strings.bns.belnetName1Year"),
        label: "1 yr",
        value: "1y",
        amount: "650 bdx"
      },
      {
        // label: this.$t("strings.bns.belnetNameXYears", { years: 2 }),
        label: "2 yrs",
        value: "2y",
        amount: "1000 bdx"
      },
      {
        // label: this.$t("strings.bns.belnetNameXYears", { years: 5 }),
        label: "5 yrs",
        value: "5y",
        amount: "2000 bdx"
      },
      {
        // label: this.$t("strings.bns.belnetNameXYears", { years: 10 }),
        label: "10 yrs",
        value: "10y",
        amount: "4000 bdx"
      }
    ];
    // let typeOptions = [...bchatOptions, ...belnetOptions];
    let typeOptions = [...belnetOptions];

    const initialRecord = {
      // Belnet 1 year is valid on renew or purchase
      years: typeOptions[0].value,
      type: "",
      name: "",
      value: "",
      owner: "",
      backup_owner: ""
    };

    return {
      record: { ...initialRecord },
      typeOptions,
      belnetOptions,

      bchatId: "",
      belnetId: "",
      address: "",
      idsValidation: false
    };
  },
  watch: {
    addressRef: {
      handler(val, old) {
        if (val === old) return;
        if (!val) {
          this.address = "";
        }
      }
    },
    bchatIdRef: {
      handler(val, old) {
        if (val === old) return;
        if (!val) {
          this.bchatId = "";
        }
      }
    },
    belnetIdRef: {
      handler(val, old) {
        if (val === old) return;
        if (!val) {
          this.belnetId = "";
        }
      }
    }
  },
  computed: mapState({
    theme: state => state.gateway.app.config.appearance.theme,
    our_address: state => state.gateway.wallet.info.address,
    info: state => state.gateway.wallet.info,
    is_ready() {
      return this.$store.getters["gateway/isReady"];
    },
    is_able_to_send() {
      return this.$store.getters["gateway/isAbleToSend"];
    },
    value_field_label() {
      if (this.record.type === "bchat") {
        return this.$t("fieldLabels.bchatId");
      } else {
        return this.$t("fieldLabels.belnetFullAddress");
      }
    },
    can_update() {
      // if we are on update screen and there have been no changes, then not allowed
      // to click "update"

      if (this.updating === true) {
        const isOwnerDifferent =
          this.record.owner !== "" &&
          this.record.owner !== this.initialRecord.owner;
        const isBackupOwnerDifferent =
          this.record.backup_owner !== "" &&
          this.record.backup_owner !== this.initialRecord.backup_owner;
        const isValueDifferent = this.record.value !== this.initialRecord.value;
        const different =
          isOwnerDifferent || isBackupOwnerDifferent || isValueDifferent;

        return different;
      }
      return true;
    },
    value_placeholder() {
      if (this.record.type === "bchat") {
        return this.$t("placeholders.bchatId");
      } else {
        return this.$t("placeholders.belnetFullAddress");
      }
    },
    owner_placeholder() {
      const { owner } = this.initialRecord || {};
      if (!owner || owner.trim() === "") {
        return this.our_address;
      }

      return owner;
    },
    cleanRecord() {
      return {
        years: "",
        type: "bchat",
        name: "",
        value: "",
        owner: "",
        backup_owner: ""
      };
    }
  }),
  methods: {
    setRecord(record) {
      this.initialRecord = {
        ...this.cleanRecord,
        ...(record || {})
      };
      this.record = { ...this.initialRecord };
    },
    isAddress: function(value) {
      if (value === "") return true;

      return new Promise(resolve => {
        address(value, this.$gateway)
          .then(() => resolve(true))
          .catch(() => resolve(false));
      });
    },
    reset() {
      this.initialRecord = { ...this.cleanRecord };
      this.record = { ...this.cleanRecord };
      (this.bchatId = ""), (this.belnetId = ""), (this.address = "");
      (this.bchatIdRef = false),
        (this.belnetIdRef = false),
        (this.addressRef = false);
      this.$v.$reset();
    },
    submit() {
      this.$v.record.$touch();

      const nameValidator = this.$v.record.name;
      if (nameValidator.$error) {
        let message;
        if (!nameValidator.required) {
          message = "notification.errors.enterName";
        } else if (!nameValidator.maxLength) {
          message = "notification.errors.invalidNameLength";
        } else if (!nameValidator.hyphen) {
          message = "notification.errors.invalidNameHypenNotAllowed";
        } else {
          message = "notification.errors.invalidNameFormat";
        }
        // console.log("onsubmit ::", message);
        this.$q.notify({
          type: "negative",
          timeout: 3000,
          message: this.$t(message)
        });
        return;
      }

      if (this.$v.record.backup_owner.$error) {
        this.$q.notify({
          type: "negative",
          timeout: 3000,
          message: this.$t("notification.errors.invalidBackupOwner")
        });
        return;
      }

      if (this.$v.record.owner.$error) {
        this.$q.notify({
          type: "negative",
          timeout: 3000,
          message: this.$t("notification.errors.invalidOwner")
        });
        return;
      }
      if (this.addressRef) {
        this.$v.address.$touch();
        if (this.$v.address.$error) {
          this.$q.notify({
            type: "negative",
            timeout: 3000,
            message: "please enter the valid address"
          });
          return;
        }
      }
      if (this.bchatIdRef) {
        this.$v.bchatId.$touch();
        if (this.$v.bchatId.$error) {
          this.$q.notify({
            type: "negative",
            timeout: 3000,
            message: "please enter the valid bchat Id"
          });
          return;
        }
      }
      if (this.belnetIdRef) {
        this.$v.belnetId.$touch();
        if (this.$v.belnetId.$error) {
          this.$q.notify({
            type: "negative",
            timeout: 3000,
            message: "please enter the valid belnetId Id"
          });
          return;
        }
      }

      // console.log("onsubmit :2:");

      // if (this.$v.record.value.$error) {
      //   let message = "Invalid value provided";
      //   if (this.record.type === "bchat") {
      //     message = this.$t("notification.errors.invalidBchatId");
      //   }
      //   this.$q.notify({
      //     type: "negative",
      //     timeout: 3000,
      //     message
      //   });
      //   return;
      // }
      // console.log("onsubmit :3:");

      if (!this.bchatId && !this.belnetId && !this.address) {
        this.idsValidation = true;
        this.$q.notify({
          type: "negative",
          timeout: 3000,
          message: "please enter any ids"
        });
        return;
      } else {
        this.idsValidation = false;
      }

      // The validators validate on lowercase, need to submit as lowercase too
      const submitRecord = {
        ...this.record,
        name: this.record.name.includes(".bdx")
          ? this.record.name.toLowerCase()
          : this.record.name.toLowerCase() + ".bdx",
        value: this.record.value.toLowerCase(),
        value_bchat: this.bchatId,
        value_belnet: this.belnetId,
        value_wallet: this.address
      };
      // Send up the submission with the record
      this.$emit("onSubmit", submitRecord);
    },
    clear() {
      this.$emit("onClear");
    }
  },
  validations: {
    record: {
      name: {
        required,
        maxLength: maxLength(64),
        hyphen: function(value) {
          let str = value || "";

          return !(str.startsWith("-") || str.endsWith("-"));
        },
        validate: function(value) {
          const _value = value.toLowerCase();
          // if (this.record.type === "bchat") {
          return bns_name(_value);

          // } else {
          //   // shortened belnet BNS name
          //   return belnet_name(_value);
          // }
        }
      },
      owner: {
        validate: function(value) {
          return this.isAddress(value);
        }
      },
      backup_owner: {
        validate: function(value) {
          return this.isAddress(value);
        }
      }

      // value: {
      //   required,
      //   validate: function (value) {
      //     const _value = value.toLowerCase();
      //     if (this.record.type === "bchat") {
      //       return bchat_id(_value);
      //     } else {
      //       // full belnet address
      //       return belnet_address(_value);
      //     }
      //   }
      // },
    },
    address: {
      validate: function(value) {
        // console.log("!value&&!this.addressref ::",!value&&!this.addressref)
        // if(!value&&!this.addressref) return true;
        if (!value) return false;
        return this.isAddress(value);
      }
    },
    bchatId: {
      validate: function(value) {
        const _value = value.toLowerCase();
        return bchat_id(_value);
      }
    },

    belnetId: {
      validate: function(value) {
        const _value = value.toLowerCase();
        return belnet_address(_value.replace(".bdx", ""));
      }
    }
  }
};
</script>

<style lang="scss">
.bns-input-form {
  .buttons {
    margin-top: 20px;

    .q-btn:not(:first-child) {
      margin-left: 8px;
    }
  }
  .notes {
    color: #20d030;
    font-size: 12px;
  }
  .errorborder {
    border: 1px solid red;
  }
}

.idSelectorWrapper {
  .selectionBox {
    background-color: #474766;
    border-radius: 10px;
    border: 2px solid #474766;
  }
  .selected {
    border: 2px solid #00ad07;
  }
}
</style>
