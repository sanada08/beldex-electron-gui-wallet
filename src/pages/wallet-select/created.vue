<template>
  <q-page
    padding
    class="created"
    style="
      min-height: 730px;
      background-color: #242433;
      margin-top: 20px;
      border-radius: 15px;
      font-family: Poppins-Bold;
    "
  >
    <div class="col wallet q-mb-lg">
      <h4
        style="
          color: white;
          display: flex;
          justify-content: center;
          font-size: 28px;
          margin-top: 0px;
        "
      >
        <!-- {{ $t("strings.walletCreated") }} -->
        {{ this.$route.query.title }}
      </h4>
      <h6 style="color: white; font-size: 16px; margin-left: 12px">
        <span style="font-family: Poppins-Regular"
          >{{ this.$t("footer.wallet") }}:</span
        >
        {{ walletName }}
      </h6>
      <div
        class="row items-center"
        style="
          border: 1px #484856 solid;
          border-radius: 12px;
          font-family: Poppins-Regular;
          padding: 10px 20px;
        "
      >
        <div class="col" style="color: white; padding: 0px 10px 0px 0px">
          {{ info.address }}
        </div>
        <div class="q-item-side">
          <q-btn
            color="primary1"
            size="md"
            :label="this.$t('buttons.copy')"
            font-size="20px;"
            icon-right="file_copy"
            @click="copyAddress"
          >
            <q-tooltip
              anchor="center left"
              self="center right"
              :offset="[5, 10]"
              >{{ $t("menuItems.copyAddress") }}</q-tooltip
            >
          </q-btn>
        </div>
      </div>
    </div>

    <div class="col wallet q-mb-lg">
      <h6 style="font-family: Poppins-Regular">
        <span
          style="
            color: white;
            font-size: 16px;
            margin-left: 12px;
            font-family: Poppins-Medium;
          "
          >Recovery Seed</span
        >
        <span style="color: #00e509"
          >- {{ $t("strings.saveSeedWarning") }}</span
        >
      </h6>
    </div>

    <div
      class="row items-center"
      style="
        border: 1px #484856 solid;
        border-radius: 12px;
        font-family: Poppins-Regular;
        padding: 10px 20px;
      "
    >
      <div class="col" style="color: white; padding: 0px 10px 0px 0px">
        {{ secret.mnemonic }}
      </div>
      <div class="q-item-side">
        <q-btn
          color="primary1"
          size="md"
          :label="this.$t('buttons.copy')"
          icon-right="file_copy"
          @click="copyPrivateKey('mnemonic', $event)"
        >
          <q-tooltip
            anchor="center left"
            self="center right"
            :offset="[5, 10]"
            >{{ $t("menuItems.copyAddress") }}</q-tooltip
          >
        </q-btn>
      </div>
    </div>

    <div style="margin-top: 18px; padding: 10px 12px">
      <template v-if="secret.view_key != secret.spend_key">
        <div class="row">
          <div class="col-10" style="word-break: break-all; color: #fff">
            <h6 class="q-mb-xs title">{{ $t("strings.viewKey") }}</h6>
            <p style="font-family: Poppins-Regular">{{ secret.view_key }}</p>
          </div>
          <div
            class="q-item-side"
            style="align-items: center; display: flex; justify-content: center"
          >
            <q-btn
              color="primary1"
              padding="xs"
              size="md"
              :label="this.$t('buttons.copy')"
              icon-right="file_copy"
              @click="copyPrivateKey('view_key', $event)"
            >
              <q-tooltip
                anchor="center left"
                self="center right"
                :offset="[5, 10]"
                >{{ $t("menuItems.copyViewKey") }}</q-tooltip
              >
            </q-btn>
          </div>
        </div>
      </template>
      <hr color="#3E3E5B" width="98%" />

      <template v-if="!/^0*$/.test(secret.spend_key)">
        <div class="row">
          <div class="col-10" style="word-break: break-all; color: #fff">
            <h6 class="q-mb-xs title">{{ $t("strings.spendKey") }}</h6>
            <p style="font-family: Poppins-Regular">{{ secret.spend_key }}</p>
          </div>
          <div
            class="q-item-side"
            style="align-items: center; display: flex; justify-content: center"
          >
            <q-btn
              color="primary1"
              padding="xs"
              size="md"
              :label="this.$t('buttons.copy')"
              icon-right="file_copy"
              @click="copyPrivateKey('spend_key', $event)"
            >
              <q-tooltip
                anchor="center left"
                self="center right"
                :offset="[5, 10]"
                >{{ $t("menuItems.copySpendKey") }}</q-tooltip
              >
            </q-btn>
          </div>
        </div>
      </template>
    </div>
    <!-- </q-expansion-item>  -->
    <div style="display: flex; justify-content: center">
      <q-btn
        class="q-mt-lg"
        color="primary"
        :label="$t('buttons.openWallet')"
        @click="open"
      />
    </div>
  </q-page>
</template>

<script>
const { clipboard } = require("electron");
import { mapState } from "vuex";
export default {
  computed: mapState({
    info: state => state.gateway.wallet.info,
    secret: state => state.gateway.wallet.secret,
    theme: state => state.gateway.app.config.appearance.theme,
    walletName() {
      return `${this.info.name}`;
    }
  }),
  methods: {
    open() {
      setTimeout(() => {
        this.$store.commit("gateway/set_wallet_data", {
          secret: {
            mnemonic: "",
            spend_key: "",
            view_key: ""
          }
        });
      }, 500);
      this.$router.replace({ path: "/wallet" });
    },
    copyPrivateKey(type, event) {
      event.stopPropagation();

      for (let i = 0; i < event.path.length; i++) {
        if (event.path[i].tagName == "BUTTON") {
          event.path[i].blur();
          break;
        }
      }

      if (this.secret[type] == null) {
        this.$q.notify({
          type: "negative",
          timeout: 1000,
          message: this.$t("notification.errors.copyingPrivateKeys")
        });
        return;
      }

      clipboard.writeText(this.secret[type]);
      let type_key = "seedWords";
      if (type === "spend_key") {
        type_key = "spendKey";
      } else if (type === "view_key") {
        type_key = "viewKey";
      }
      const type_title = this.$t("dialog.copyPrivateKeys." + type_key);

      this.$q
        .dialog({
          title: this.$t("dialog.copyPrivateKeys.title", {
            type: type_title
          }),
          message: this.$t("dialog.copyPrivateKeys.message"),
          ok: {
            label: this.$t("dialog.buttons.ok"),
            color: "primary"
          }
        })
        .onDismiss(() => null)
        .onCancel(() => null)
        .onOk(() => {
          this.$q.notify({
            type: "positive",
            timeout: 1000,
            message: this.$t("notification.positive.copied", {
              item: this.$t("strings." + type_key)
            })
          });
        });
    },
    copyAddress() {
      clipboard.writeText(this.info.address);
      this.$q.notify({
        type: "positive",
        timeout: 1000,
        message: this.$t("notification.positive.addressCopied"),
        dark: this.theme == "dark"
      });
    }
  }
};
</script>

<style lang="scss"></style>
