<template>
  <div>
    <div
      style="    
             background: #32324A;
             width: 300px;
             height: 465px;
             display: flex;
             align-items: center;
             justify-content: center;
             margin: 0 auto;"
      class="language-select column items-center justify-center"
    >
      <div>
        <h6 class="q-my-md" style="font-weight: 300">
          {{ $t("strings.selectLanguage") }}:
        </h6>
        <div class="column justify-center">
          <q-btn
            v-for="option in options"
            :key="option.value"
            class="row justify-center items-center"
            :color="lang === option.value ? 'primary' : 'accent'"
            size="md"
            @click="setLanguage(option.value)"
          >
            <span :class="`flag-icon flag-icon-${option.flag}`" />
            <span>{{ option.label }}</span>
          </q-btn>
        </div>
      </div>
      <q-btn color="primary" :label="$t('buttons.save')" @click="save" />
    </div>
  </div>
</template>

<script>
import { languages } from "src/i18n";

export default {
  name: "LanguageSelect",
  computed: {
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
  methods: {
    save() {
      console.log("nowfiiiiiilllll----langauge -");
      // this.$gateway.send("core", "save_config", this.pending_config);
      // this.isVisible = false;
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

  .flag-icon {
    margin-right: 4px;
  }
}
</style>
