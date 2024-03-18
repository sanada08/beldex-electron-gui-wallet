<template>
  <q-dialog v-model="show" persistent>
    <q-card class="confirm-tx-card">
      <q-card-section>
        <div class="text-h6 text-center ft-semibold">
          {{ $t("dialog.confirmTransaction.title") }}
        </div>
      </q-card-section>
      <q-card-section>
        <div class="confirm-list ">
          <div>
            <span class="label ft-semibold "
              >{{ $t("dialog.confirmTransaction.sendTo") }}:
            </span>
            <br />
            <span class="address-value ft-regular">{{ sendTo }}</span>
          </div>

          <div class="hr-separator " />

          <span class="label ft-semibold"
            >{{ $t("strings.transactions.amount") }}:
          </span>
          <span class="address-value ft-medium"> {{ amount }} BDX</span>

          <br />
          <div class="hr-separator" />

          <span class="label ft-semibold"
            >{{ $t("strings.transactions.fee") }}:
          </span>
          <span class="address-value ft-medium">{{ fee }} BDX</span>

          <br />
          <div class="hr-separator" />

          <span class="label ft-semibold"
            >{{ $t("dialog.confirmTransaction.priority") }}:
          </span>
          <span class="address-value ft-medium">{{
            isflashToTranslatedLabel(isflash)
          }}</span>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          :label="$t('dialog.buttons.cancel')"
          color="accent"
          @click="onCancelTransaction"
        />
        <q-btn
          color="primary"
          :label="$t('buttons.send')"
          @click="onConfirmTransaction"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "ConfirmTransactionDialog",
  props: {
    sendTo: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    fee: {
      type: Number,
      required: true
    },
    isflash: {
      type: Boolean,
      required: true
    },
    onConfirmTransaction: {
      type: Function,
      required: true
    },
    onCancelTransaction: {
      type: Function,
      required: true
    },
    show: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    isflashToTranslatedLabel(isflash) {
      const flashOrSlow = isflash
        ? "strings.priorityOptions.flash"
        : "strings.priorityOptions.slow";
      return this.$t(flashOrSlow);
    }
  }
};
</script>

<style></style>
