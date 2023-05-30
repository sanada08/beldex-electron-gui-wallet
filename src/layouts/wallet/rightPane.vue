<template>
  <section>
    <article>
      <div class="userName">{{ info.name }}</div>
      <div class="sub-txt">Total Balance</div>
      <div class="balance">{{ info.balance }}<span>BDX</span></div>
    </article>
    <article class="flex justify-between q-mt-md">
      <!-- <article class="flex  q-mt-md"> -->

      <!-- <router-link to="/wallet/send"> -->
      <div :class="[this.routes === 'send' ? 'active' : '']">
        <!-- <q-btn class="large-btn send-btn" size="md" @click="router('send')"> -->
        <q-btn class="large-btn send-btn" size="md" @click="router('send')">
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.289064 6.61106C0.0558891 6.88987 0.0586794 7.34525 0.295297 7.62817C0.334142 7.67441 0.377977 7.71422 0.425604 7.74651C0.426714 7.74719 0.427825 7.74786 0.428939 7.74853L3.71653 10.7093L3.3068 13.2484L13.0299 3.67152L5.02053 15.2975L7.144 14.8076L9.62101 18.7396C9.64809 18.7976 9.68168 18.8511 9.72083 18.8984C9.95745 19.1813 10.3383 19.1846 10.5715 18.9058C10.6273 18.8383 10.6711 18.758 10.7004 18.6696L10.7021 18.6696L10.711 18.6369L10.7159 18.621C10.717 18.6164 10.7181 18.6118 10.7192 18.6072L15.2786 1.92726L15.2777 1.92427C15.3658 1.65816 15.3119 1.3526 15.1409 1.14737C14.9689 0.94202 14.7125 0.877606 14.4895 0.983742L14.4886 0.982741L14.4878 0.983727L0.543811 6.43253C0.524437 6.43882 0.505354 6.44628 0.486633 6.45487C0.412525 6.49049 0.345349 6.5436 0.289064 6.61106Z"
              fill="white"
            />
          </svg>
          <span class="btn-txt">{{ $t("buttons.send") }}</span>
        </q-btn>
      </div>
      <!-- </router-link> -->
      <!-- <router-link to="/wallet/receive"> -->
      <div :class="[this.routes === 'receive' ? 'active' : '']">
        <q-btn class="large-btn send-btn" size="md" @click="router('receive')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="22"
            viewBox="0 96 960 960"
            width="25"
          >
            <path
              d="M220 896q-24 0-42-18t-18-42V693h60v143h520V693h60v143q0 24-18 42t-42 18H220Zm260-153L287 550l43-43 120 120V256h60v371l120-120 43 43-193 193Z"
              fill="white"
            />
          </svg>
          <span class="btn-txt">{{ $t("buttons.receive") }}</span>
        </q-btn>
      </div>
    </article>
    <div class="hr-separator" />
    <article>
      <keep-alive>
        <div v-if="this.routes === 'send'">
          <Send />
        </div>
        <div v-else-if="this.routes === 'receive'">
          <Receive />
        </div>
        <div v-else>
          <Adressbook />
        </div>
        <!-- <router-view /> -->
      </keep-alive>
    </article>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Send from "pages/wallet/send";
import Receive from "pages/wallet/receive";
import Adressbook from "pages/wallet/addressbook.vue";

export default {
  name: "RightPane",
  components: {
    Send,
    Receive,
    Adressbook
  },
  computed: mapState({
    info: state => state.gateway.wallet.info
  }),
  data() {
    return {
      routes: "send"
    };
  },
  methods: {
    router: function(e) {
      this.routes = e;
      console.log(this.routes);
    }
  }
};
</script>

<style lang="scss"></style>
