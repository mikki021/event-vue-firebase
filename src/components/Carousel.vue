<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    delimiter-icon="mdi-minus"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.img"
      :to="'/events/' + slide.id"
    >
      <v-row class="fill-height" align="bottom" justify="center">
        <div class="display-3 pt-6">
          <h3>{{ slide.title }} Slide</h3>
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
      default: () => [
        {
          title: "First",
          img: "https://picsum.photos/876/400",
          id: 1
        },
        {
          title: "Second",
          img: "https://picsum.photos/880/400",
          id: 2
        },
        {
          title: "Third",
          img: "https://picsum.photos/890/400",
          id: 3
        }
      ]
    }
  }
};
</script>
