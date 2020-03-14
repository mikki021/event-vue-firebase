<template>
  <v-app>
    <Navbar />

    <main>
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col class="text-center">
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn :href="source" icon large target="_blank" v-on="on">
                    <v-icon large>mdi-code-tags</v-icon>
                  </v-btn>
                </template>
                <span>Source</span>
              </v-tooltip>

              <v-tooltip right>
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    large
                    href="https://codepen.io/johnjleider/pen/zgxeLQ"
                    target="_blank"
                    v-on="on"
                  >
                    <v-icon large>mdi-codepen</v-icon>
                  </v-btn>
                </template>
                <span>Codepen</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-container>
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
