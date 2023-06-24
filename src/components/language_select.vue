<template>
  <section>
    <div class="language-select column items-center justify-center q-mb-lg">
      <!-- <h6 class="q-my-md" style="font-weight: 300">
      {{ $t("strings.selectLanguage") }}:
     </h6> -->
      <div class="inner-box row justify-between q-mb-lg">
        <q-btn
          v-for="option in options"
          :key="option.value"
          class="row justify-center items-center"
          :color="lang === option.value ? 'active' : ''"
          outline
          @click="setLanguage(option.value)"
        >
          <span :class="`flag-icon flag-icon-${option.flag}`" />
          <span>{{ option.label }}</span>
        </q-btn>
      </div>
    </div>
    <div class="flex justify-center">
      <q-btn color="primary" label="Next" @click="submit()" />
    </div>
  </section>
</template>

<script>
import { languages } from "src/i18n";

export default {
  name: "LanguageSelect",
  data() {
    return {
      langData: ""
    };
  },
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
    setLanguage(lang) {
      this.$gateway.send("core", "set_language", { lang });
      this.langData = lang;
      // this.$emit("select", lang);
    },
    submit() {
      this.$emit("select", this.langData);
    }
  }
};
</script>

<style lang="scss">
.language-select {
  .inner-box {
    color: #fff;
    width: 83%;
    background-color: #32324a;
    /* height: 212px; */
    padding: 36px;
    border-radius: 10px;

    .flag-icon {
      margin-right: 10px;
    }
  }
}
</style>
