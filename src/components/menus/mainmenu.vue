<template>
  <div>
    <q-btn class="menu" icon="settings" size="md" flat>
      <q-menu>
        <q-list separator class="menu-list">
          <q-item
            v-if="!disableSwitchWallet"
            v-close-popup
            clickable
            @click.native="switchWallet"
          >
            <q-item-label header>{{
              $t("menuItems.switchWallet")
            }}</q-item-label>
          </q-item>
          <q-item v-close-popup clickable @click.native="openSettings">
            <q-item-label header>{{ $t("menuItems.settings") }}</q-item-label>
          </q-item>
          <q-item v-close-popup clickable @click.native="showAbout(true)">
            <q-item-label header>{{ $t("menuItems.about") }}</q-item-label>
          </q-item>
          <q-item v-close-popup clickable @click.native="exit">
            <q-item-label header>{{ $t("menuItems.exit") }}</q-item-label>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <SettingsModal ref="settingsModal" />
    <!-- TODO: Move this to it's own component -->
    <q-dialog ref="aboutModal" minimized>
      <div class="about-modal">
        <div style="">
          <div class="logo">
            <img src="beldex.svg" height="50" />
          </div>
          <p class="text">
            Beldex <span style="color: #ffffff">Electron Wallet</span>
          </p>
          <hr style="width: 70%; border: 1px solid #4d4d6d" />
          <p class="q-my-sm">
            Wallet Version: <span style="color: #00ad07">{{ version }}</span>
          </p>
          <p class="q-my-sm">
            Deaemon Version:
            <span style="color: #00ad07">{{ daemonVersion }}</span>
          </p>
          <p class="q-my-sm">
            Copyright (c) -
            <span style="color: #00ad07">2018-2021, Beldex</span>
          </p>
          <p
            class="q-my-sm"
            style="font-family: Poppins-Regular; font-size: 13px"
          >
            All rights reserved.
          </p>

          <div class="q-mt-md external-links">
            <p style="margin: 0 0 20px">
              <img src="telegram.svg" height="12" />
              <a href="#" @click="openExternal('t.me/official_beldex')"
                >Telegram</a
              >

              <img src="discord.svg" height="12" />
              <a
                href="#"
                @click="openExternal('https://discord.com/invite/Hj4MAmA5gs')"
                >Discord</a
              >

              <!-- readded once oxen subreddit is known -->
              <!-- <a
              href="#"
              @click="openExternal('https://www.reddit.com/r/LokiProject/')"
              >Reddit</a
            >
            - -->
              <img src="github.svg" height="12" />
              <a
                href="#"
                @click="
                  openExternal(
                    'https://github.com/Beldex-Coin/beldex-electron-gui-wallet'
                  )
                "
                >Github</a
              >
            </p>
          </div>
          <div
            style="display: flex; align-items: center; justify-content: center"
          >
            <p>
              <img src="www.svg" height="12" />
              <a
                style="color: #ffffff"
                href="#"
                @click="openExternal('https://beldex.io')"
                >beldex.io</a
              >
            </p>
          </div>
          <div style="display: flex; justify-content: center">
            <q-btn
              style="min-width: 100px; height: 45px"
              color="primary"
              label="OK"
              @click="showAbout(false)"
            />
          </div>
        </div>
      </div>
    </q-dialog>
  </div>
</template>

<script>
import { version } from "../../../package.json";
import { mapState } from "vuex";
import SettingsModal from "components/settings";
export default {
  name: "MainMenu",
  components: {
    SettingsModal
  },
  props: {
    disableSwitchWallet: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      version: ""
    };
  },
  computed: mapState({
    theme: state => state.gateway.app.config.appearance.theme,
    isRPCSyncing: state => state.gateway.wallet.isRPCSyncing,
    daemon: state => state.gateway.daemon,
    daemonVersion() {
      return this.daemon.info.version || "N/A";
    }
  }),
  mounted() {
    this.version = version;
  },
  methods: {
    openExternal(url) {
      this.$gateway.send("core", "open_url", { url });
    },
    showAbout(toggle) {
      if (toggle) this.$refs.aboutModal.show();
      else this.$refs.aboutModal.hide();
    },
    openSettings() {
      this.$refs.settingsModal.isVisible = true;
    },
    switchWallet() {
      // If the rpc is syncing then we want to tell the user to restart
      if (this.isRPCSyncing) {
        this.$gateway.confirmClose(
          this.$t("dialog.switchWallet.restartMessage"),
          true
        );
        return;
      }

      // TODO: Remove this in hardfork 16
      // This is a temporary work around for the issue where wallet rpc hangs after closing a wallet due to long polling still being active
      this.$gateway.confirmClose(
        this.$t("dialog.switchWallet.restartWalletMessage"),
        true
      );

      // Allow switching normally because rpc won't be blocked
      // NB: If this is added back, must use the quasar v1 APIs
      /*
      this.$q
        .dialog({
          title: this.$t("dialog.switchWallet.title"),
          message: this.$t("dialog.switchWallet.closeMessage"),
          ok: {
            label: this.$t("dialog.buttons.ok")
          },
          cancel: {
            flat: true,
            label: this.$t("dialog.buttons.cancel"),
            color: this.theme == "dark" ? "white" : "dark"
          }
        })
        .then(() => {
          this.$router.replace({ path: "/wallet-select" });
          this.$gateway.send("wallet", "close_wallet");
          setTimeout(() => {
            // short delay to prevent wallet data reaching the
            // websocket moments after we close and reset data
            this.$store.dispatch("gateway/resetWalletData");
          }, 250);
        })
        .catch(() => {});
       */
    },
    exit() {
      this.$gateway.confirmClose(this.$t("dialog.exit.message"));
    }
  }
};
</script>

<style lang="scss">
.q-menu {
  max-width: unset !important;
}

.about-modal {
  font-family: Poppins-Medium;

  a {
    margin-right: 10px;
  }
  img {
    margin-right: 5px;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    font-family: Poppins-Bold;
    color: #00ad07;
    font-size: 20px;
  }

  padding: 25px;
  background-color: #2f2f40;
  color: #fff;
  border-radius: 10px !important;

  .external-links {
    a {
      color: #ffffff;
      text-decoration: none;

      &:hover,
      &:active,
      &:visited {
        text-decoration: underline;
      }
    }
  }
}
</style>
