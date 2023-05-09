<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: mapState({
    theme: state => state.gateway.app.config.appearance.theme
  }),
  watch: {
    theme: function() {
      if (this.theme == "dark") document.body.classList.add("dark");
      else document.body.classList.remove("dark");
    }
  },
  mounted() {
    if (this.theme == "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }
};
</script>

<style>
@font-face {
  font-family: "Poppins-Regular";
  src: local("Poppins-Regular"),
    url(./assets/fonts/Poppins-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins-Medium";
  src: local("Poppins-Medium"),
    url(./assets/fonts/Poppins-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins-SemiBold";
  src: local("Poppins-SemiBold"),
    url(./assets/fonts/Poppins-SemiBold.ttf) format("truetype");
}

@font-face {
  font-family: "Poppins-Bold";
  src: local("Poppins-Bold"),
    url(./assets/fonts/Poppins-Bold.ttf) format("truetype");
}
@font-face {
  font-family: "Poppins-Light";
  src: local("Poppins-Light"),
    url(./assets/fonts/Poppins-Light.ttf) format("truetype");
}
</style>
