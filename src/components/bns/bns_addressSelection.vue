<template>
  <div class="idSelectorWrapper">
    <section class="q-mt-md">
      <div
        class="flex row items-center no-wrap q-pa-sm q-mb-sm selectionBox "
        :class="[bchatIdRef ? 'selected' : '']"
      >
        <q-checkbox
          v-model="bchatIdRef"
          style="width: 140px"
          size="sm"
          label="BChat ID"
          color="green"
        />
        <OxenField class="full-width" optional>
          <q-input
            v-model="bchatId"
            :disable="!bchatIdRef"
            :dark="theme == 'dark'"
            placeholder="BChat ID"
            borderless
            dense
          />
        </OxenField>
        <!-- <q-radio
          keep-color
          v-model="selectedId"
          val="BChat ID"
          label="BChat ID"
          color="green"
        /> -->
      </div>
      <div
        class="flex row items-center no-wrap q-pa-sm q-mb-sm selectionBox "
        :class="[belnetIdRef ? 'selected' : '']"
      >
        <q-checkbox
          v-model="belnetIdRef"
          style="width: 140px"
          size="sm"
          label="Belnet ID"
          color="green"
        />
        <OxenField class="full-width" optional>
          <q-input
            v-model="belnetId"
            :disable="!belnetIdRef"
            :dark="theme == 'dark'"
            placeholder="Belnet ID"
            borderless
            dense
          />
        </OxenField>
        <!-- <q-radio
          keep-color
          v-model="selectedId"
          val="Belnet ID"
          label="Belnet ID"
          color="green"
        /> -->
      </div>
      <div
        class="flex row items-center no-wrap q-pa-sm q-mb-sm selectionBox "
        :class="[addressRef ? 'selected' : '']"
      >
        <q-checkbox
          v-model="addressRef"
          style="width: 140px"
          size="sm"
          label="Address"
          color="green"
        />
        <OxenField class="full-width" optional>
          <q-input
            v-model="address"
            :disable="!addressRef"
            :dark="theme == 'dark'"
            placeholder="Address"
            borderless
            dense
          />
        </OxenField>
        <!-- <q-radio
          keep-color
          v-model="selectedId"
          val="Address"
          label="Address"
          color="green"
        /> -->
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
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";
import OxenField from "components/oxen_field";
import { mapState } from "vuex";

export default {
  name: "BNSAddressSelection",
  components: {
    OxenField
  },

  setup() {
    // const selectedId = ref();
    return {
      // selectedId: ref(""),
      bchatIdRef: ref(false),
      belnetIdRef: ref(false),
      addressRef: ref(false),
      // bchatId: "",
      belnetId: "",
      address: ""
    };
  },
  computed: mapState({
    theme: state => state.gateway.app.config.appearance.theme
  }),

  props: {
    parentValue: String
  },
  data() {
    return {
      bchatId: this.parentValue
    };
  },
  methods: {
    updateParentValue() {
      this.$emit("update-parent", this.childValue);
    }
  }
};
</script>

<style lang="scss">
.idSelectorWrapper {
  .selectionBox {
    background-color: #474766;
    border-radius: 10px;
  }
  .selected {
    border: 1px solid #00ad07;
  }
}
</style>
