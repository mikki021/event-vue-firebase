<template>
  <div>
    <v-navigation-drawer temporary v-model="drawer" app>
      <v-list>
        <v-list-item v-for="(menuItem, index) in menuItems" :key="index" link>
          <router-link :to="menuItem.link" tag="v-list-tile">
            <v-list-item-action>
              <v-icon>{{ menuItem.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ menuItem.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="light-blue darken-3" dark>
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"
          >Event App</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>


      <v-btn
        v-for="(menuItem, index) in menuItems"
        :key="index"
        text
        class="d-none d-md-flex"
      >
        <router-link :to="menuItem.link" tag="v-btn">
          <v-icon left>{{ menuItem.icon }}</v-icon>
          {{ menuItem.title }}
        </router-link>
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
        title: "View Events",
        link: "/events"
      },
      new: {
        icon: "mdi-calendar-plus",
        title: "Add Event",
        link: "/events/new"
      },
      profile: {
        icon: "mdi-account",
        title: "Profile",
        link: "/profile"
      },
      signUp: {
        icon: "mdi-face",
        title: "Sign Up",
        link: "/sign-up"
      },
      signIn: {
        icon: "mdi-lock",
        title: "Sign In",
        link: "/sign-in"
      }
    }
  })
};
</script>
