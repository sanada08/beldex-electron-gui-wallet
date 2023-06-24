<template>
  <q-dialog v-model="show" persistent>
    <q-card class="signature-dialog">
      <q-card-section class="header-wrapper">
        <div class="text-h5 ft-semibold text-center">
          {{ $t("dialog.signature.title") }}
        </div>
        <div class="subtxt text-center ft-medium">
          {{ $t("dialog.signature.message") }}
        </div>
      </q-card-section>
      <q-card-section class="info">
        <q-item class="signature row sign-inner-wrapper ft-medium">
          <div class="col">
            <!-- <q-item-label class="labels">{{
              $t("fieldLabels.signature")
            }}</q-item-label> -->
            {{ signature }}
          </div>
          <div class="col-auto">
            <div
              class="copyIcon-btn flex justify-center items-center"
              color="primary"
              icon="content_copy"
              @click="onCopySignature"
            >
              <q-icon name="content_copy" color="white" size="24px" />
              <q-tooltip
                anchor="center left"
                self="center right"
                :offset="[5, 10]"
              >
                {{ $t("buttons.copySignature") }}
              </q-tooltip>
            </div>
          </div>
        </q-item>
        <q-item class="row unsigned-data sign-inner-wrapper ft-medium">
          <div class="col">
            <!-- <q-item-label class="labels">{{
              $t("fieldLabels.data")
            }}</q-item-label> -->
            {{ unsignedData }}
          </div>
          <div class="col-auto">
            <div
              class="copyIcon-btn flex justify-center items-center"
              color="primary"
              @click="onCopyUnsignedData"
            >
              <q-icon name="content_copy" color="white" size="24px" />

              <q-tooltip
                anchor="center left"
                self="center right"
                :offset="[5, 10]"
              >
                {{ $t("buttons.copyData") }}
              </q-tooltip>
            </div>
          </div>
        </q-item>
        <q-item class="row address sign-inner-wrapper ft-medium">
          <div class="col">
            <!-- <q-item-label class="labels">{{
              $t("fieldLabels.address")
            }}</q-item-label> -->
            {{ address }}
          </div>
          <div class="col-auto">
            <div
              class="copyIcon-btn flex justify-center items-center vertical-middle"
              @click="onCopyAddress"
            >
              <q-icon name="content_copy" color="white" size="24px" />

              <q-tooltip
                anchor="center left"
                self="center right"
                :offset="[5, 10]"
              >
                {{ $t("buttons.copyAddress") }}
              </q-tooltip>
            </div>
          </div>
        </q-item>
      </q-card-section>
      <q-card-actions align="right" class="q-my-lg">
        <q-btn color="accent" :label="$t('buttons.close')" @click="onClose" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "SignatureDialog",
  props: {
    onCopySignature: {
      type: Function,
      required: true
    },
    onCopyAddress: {
      type: Function,
      required: true
    },
    onCopyUnsignedData: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
    signature: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      required: false,
      default: true
    },
    address: {
      type: String,
      required: true
    },
    unsignedData: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.info {
  flex: 1;
  word-break: break-all;
  word-wrap: break-word;

  .labels {
    font-weight: bold;
    margin-bottom: 4px;
  }
}
</style>
