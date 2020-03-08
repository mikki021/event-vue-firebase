<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="(menuItem, index) in menuItems" :key="index" link>
          <v-list-item-action>
            <v-icon>{{ menuItem.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="light-blue darken-3" dark>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>Event app</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        v-for="(menuItem, index) in menuItems"
        :key="index"
        text
        class="d-none d-sm-flex"
      >
        <v-icon left>{{ menuItem.icon }}</v-icon>
        {{ menuItem.title }}
      </v-btn>
    </v-app-bar>

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
export default {
  name: "App",

  components: {},

  props: {
    source: String
  },

  data: () => ({
    drawer: false,
    menuItems: {
      events: {
        icon: "mdi-calendar",
        title: "View Events"
      },
      new: {
        icon: "mdi-calendar-plus",
        title: "Add Event"
      },
      profile: {
        icon: "mdi-account",
        title: "Profile"
      }
    }
  })
};
</script>
