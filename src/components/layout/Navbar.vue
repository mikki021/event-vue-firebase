<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
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
  </div>
</template>

<script>
export default {
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
