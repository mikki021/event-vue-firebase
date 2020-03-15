<template>
  <v-container>
    <v-row class="mb-6">
      <v-col class="d-flex justify-sm-end justify-center" cols="12" sm="6">
        <v-btn class="primary" large text to="/events">Explore Events</v-btn>
      </v-col>
      <v-col class="d-flex justify-sm-start justify-center" cols="12" sm="6">
        <v-btn class="primary" large text to="/events/new">
          Organize Event
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col class="d-flex justify-center" cols="12">
        <!-- TODO Add slides prop to carousel component -->
        <carousel />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Carousel from "./Carousel.vue";
export default {
  components: {
    Carousel
  }
}
</script>
