<template>
  <div>
    <div
      style="
        background: #32324a;
        width: 360px;
        border-radius: 16px;
        height: 540px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
      "
      class="language-select column items-center justify-center"
    >
      <div class="selectLanguage" style="color: #b9b9b9">
        <p class style="font-family: Poppins-Medium; font-size: 1.25rem">
          {{ $t("strings.selectLanguage") }}
        </p>
      </div>
      <div>
        <div class="column justify-center">
          <div
            v-for="option in options"
            :key="option.value"
            :class="
              `row justify-start items-center lang-btn ft-medium ${
                lang === option.value ? 'selected-btn' : 'unselected-btn'
              }`
            "
            @click="setLanguage(option.value)"
          >
            <span :class="`flag-icon flag-icon-${option.flag}`" />
            <span class="q-ml-xs">{{ option.label }}</span>
          </div>
        </div>
      </div>
      <div class="q-mt-lg">
        <q-btn color="primary" :label="$t('buttons.save')" @click="save" />
      </div>
    </div>
  </div>
</template>

<script>
import { languages } from "src/i18n";

export default {
  name: "LanguageSelect",
  computed: {
    pending_config: state => state.gateway.app.pending_config,
    lang() {
      return this.$i18n.locale;
    },
    options() {
      return languages.map(lang => ({
        label: lang.name,
        value: lang.code,
        flag: lang.flag
      }));
    }
  },
  watch: {
    isVisible: function() {
      if (this.isVisible == false) {
        this.$store.dispatch("gateway/resetPendingConfig");
      }
    }
  },
  methods: {
    save() {
      this.$gateway.send("core", "save_config", this.pending_config);
      this.isVisible = false;
    },
    setLanguage(lang) {
      this.$gateway.send("core", "set_language", { lang });
      this.$emit("select", lang);
    }
  }
};
</script>

<style lang="scss">
.language-select {
  color: #fff;

  .q-btn {
    margin: 2px;
  }
  .q-btn__wrapper:before {
    box-shadow: unset;
  }
  .selectLanguage {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins-SemiBold";
  }
  .lang-btn,
  .selected-btn,
  .unselected-btn {
    width: 259px;
    height: 60px;
    box-shadow: none;
    margin-top: 5px;
    border-radius: 10px;
    padding-left: 4.688rem;
    font-size: 1.125rem;
  }
  .unselected-btn:hover {
    cursor: pointer;
    background-color: #484866;
  }

  .flag-icon {
    margin-right: 4px;
  }
}
</style>
