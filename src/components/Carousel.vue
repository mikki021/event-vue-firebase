<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    delimiter-icon="mdi-minus"
  >
    <v-carousel-item
      v-for="(item, i) in slides"
      :key="i"
      :to="'/events/' + item.id"
    >
      <v-sheet height="100%" class="transparent">
        <v-row align="top" justify="center" class="light-blue darken-4 pa-2">
          <div align="center" elevation="2" class="display-3 font-weight-light">{{ item.title.toUpperCase() }}</div>
        </v-row>
        <v-row class="fill-height">
          <v-img :src="item.img"></v-img>
        </v-row>
      </v-sheet>
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
