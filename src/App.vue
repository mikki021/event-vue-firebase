<template>
  <v-app>
    <navbar />

    <main>
      <v-content>
        <router-view></router-view>
      </v-content>
    </main>
    <v-footer color="light-blue darken-3" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue";

export default {
  name: "App",

  components: {
    Navbar
  },

  props: {
    source: String
  },

  data: () => ({})
};
</script>
