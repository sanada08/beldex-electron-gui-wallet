<template>
  <q-dialog v-model="show" persistent>
    <q-card class="confirm-tx-card">
      <q-card-section>
        <div class="text-h6">{{ $t("dialog.confirmTransaction.title") }}</div>
      </q-card-section>
      <q-card-section>
        <div class="confirm-list">
          <div>
            <span class="label"
              >{{ $t("dialog.confirmTransaction.sendTo") }}:
            </span>
            <br />
            <span class="address-value">{{ sendTo }}</span>
          </div>
          <br />
          <span class="label">{{ $t("strings.transactions.amount") }}: </span>
          {{ amount }} BDX
          <br />
          <span class="label">{{ $t("strings.transactions.fee") }}: </span>
          {{ fee }} BDX
          <br />
          <span class="label"
            >{{ $t("dialog.confirmTransaction.priority") }}:
          </span>
          {{ isflashToTranslatedLabel(isflash) }}
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          :label="$t('dialog.buttons.cancel')"
          color="negative"
          @click="onCancelTransaction"
        />
        <q-btn
          class="confirm-send-btn"
          flat
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
