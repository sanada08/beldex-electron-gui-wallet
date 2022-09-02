<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="shift-title">
      <MainMenu />
      <q-toolbar-title style="background: white;">
        <div class="flex items-center justify-center" style="margin:9px">
          <img src="beldex.png" height="32" />
        </div>
      </q-toolbar-title>
    </q-header>

    <q-page-container>
      <WalletDetails />
      <q-dialog ref="aboutModal" minimized>
        <div class="about-modal">
          <p class="q-my-sm">
            There is a new version of Beldex Electron Wallet is available.
            Please update your wallet from Beldex Official Website.
          </p>

          <div class="q-mt-md q-mb-lg external-links">
            <p>
              <a
                href="#"
                style="text-decoration:none"
                @click="
                  openExternal('https://beldex.io/index.html#beldex-wallets')
                "
                >https://beldex.io/index.html#beldex-wallets</a
              >
              <q-btn
                ref="copy"
                color="primary"
                padding="xs"
                size="sm"
                icon="file_copy"
                style="margin-left:8px;"
                @click="copyAddress"
              />
            </p>
          </div>
          <q-btn color="primary" label="Close" @click="showAbout(false)" />
        </div>
      </q-dialog>
      <div v-if="!is_able_to_send" class="app-content">
        <div class="navigation row items-end">
          <router-link to="/wallet">
            <q-btn class="single-icon" size="md" icon="swap_horiz" />
          </router-link>
          <router-link to="/wallet/send">
            <q-btn
              class="large-btn"
              :label="$t('buttons.send')"
              size="md"
              icon-right="arrow_right_alt"
              align="between"
            />
          </router-link>
          <router-link to="/wallet/receive">
            <q-btn
              class="large-btn"
              :label="$t('buttons.receive')"
              size="md"
              icon-right="save_alt"
              align="between"
            />
          </router-link>
          <router-link to="/wallet/masternode">
            <q-btn
              class="large-btn"
              :label="$t('buttons.masterNode')"
              size="md"
              icon-right="router"
              align="between"
            />
          </router-link>
          <!-- <router-link to="/wallet/bns">
            <q-btn
              class="large-btn"
              :label="$t('buttons.bns')"
              size="md"
              icon-right="text_fields"
              align="between"
            />
          </router-link> -->
          <router-link to="/wallet/advanced">
            <q-btn
              class="large-btn"
              :label="$t('buttons.advanced')"
              size="md"
              icon-right="tune"
              align="between"
            />
          </router-link>
          <router-link to="/wallet/addressbook" class="address">
            <q-btn class="single-icon" size="md" icon="person" />
          </router-link>
        </div>
        <div class="hr-separator" />
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </q-page-container>

    <StatusFooter />
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
import { mapState } from "vuex";
const { clipboard } = require("electron");
import WalletDetails from "components/wallet_details";
import StatusFooter from "components/footer";
import MainMenu from "components/menus/mainmenu";
export default {
  name: "LayoutDefault",
  components: {
    StatusFooter,
    MainMenu,
    WalletDetails
  },
  computed: mapState({
    theme: state => state.gateway.app.config.appearance.theme,
    info: state => state.gateway.wallet.info,
    update_required: state => state.gateway.update_required,
    is_able_to_send() {
      return this.$store.state.gateway.update_required;
    }
  }),
  mounted() {
    this.update_required == true ? this.showAbout() : "";
  },
  methods: {
    openURL,
    openExternal(url) {
      this.$gateway.send("core", "open_url", { url });
    },
    showAbout(toggle = true) {
      if (toggle) this.$refs.aboutModal.show();
      else this.$refs.aboutModal.hide();
    },
    copyAddress() {
      clipboard.writeText("https://beldex.io/index.html#beldex-wallets");
      this.$q.notify({
        type: "positive",
        timeout: 1000,
        message: this.$t("notification.positive.linkCopied")
      });
    }
  }
};
</script>

<style lang="scss">
.navigation {
  padding: 8px 12px;

  > * {
    margin: 2px 0;
    margin-right: 12px;
  }

  > *:last-child {
    margin-right: 0px;
  }

  .address {
    margin-left: auto;
  }

  .single-icon {
    width: 38px;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  .large-btn {
    min-width: 160px;
    .q-btn-inner > *:last-child {
      margin-left: auto;
      padding-left: 16px;
    }
  }
}
</style>
