<template>
  <v-container>
    <v-row class="mb-6" v-for="(event, index) in events" :key="index">
      <v-col class="d-flex justify-center">
        <v-card max-width="400px">
          <v-img class="white--text align-end" height="200px" :src="event.img">
            <v-card-title>{{ event.title }}</v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            <div>{{ truncate(event.description) }}</div>
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <router-link :to="'/events/' + event.id" tag="v-btn">
              <v-btn class="primary">
                View More
              </v-btn>
            </router-link>
            <v-btn class="primary" @click="apply(event)">
              Apply
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          id: 1,
          title: "First event",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget felis. Lectus nulla at volutpat diam. Diam vulputate ut pharetra sit amet aliquam. Condimentum lacinia quis vel eros. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Lectus arcu bibendum at varius. Felis eget velit aliquet sagittis id consectetur. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.",
          img: "https://picsum.photos/400/200"
        },
        {
          id: 2,
          title: "Second event",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget felis. Lectus nulla at volutpat diam. Diam vulputate ut pharetra sit amet aliquam. Condimentum lacinia quis vel eros. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Lectus arcu bibendum at varius. Felis eget velit aliquet sagittis id consectetur. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.",
          img: "https://picsum.photos/401/200"
        },
        {
          id: 3,
          title: "Third event",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget felis. Lectus nulla at volutpat diam. Diam vulputate ut pharetra sit amet aliquam. Condimentum lacinia quis vel eros. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Lectus arcu bibendum at varius. Felis eget velit aliquet sagittis id consectetur. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.",
          img: "https://picsum.photos/402/200"
        },
        {
          id: 4,
          title: "Fourth event",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget felis. Lectus nulla at volutpat diam. Diam vulputate ut pharetra sit amet aliquam. Condimentum lacinia quis vel eros. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Lectus arcu bibendum at varius. Felis eget velit aliquet sagittis id consectetur. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.",
          img: "https://picsum.photos/403/200"
        },
        {
          id: 5,
          title: "Fifth event",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper sit amet risus nullam eget felis. Lectus nulla at volutpat diam. Diam vulputate ut pharetra sit amet aliquam. Condimentum lacinia quis vel eros. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Lectus arcu bibendum at varius. Felis eget velit aliquet sagittis id consectetur. Arcu vitae elementum curabitur vitae nunc sed velit dignissim.",
          img: "https://picsum.photos/404/200"
        }
      ]
    };
  },

  methods: {
    truncate(text, limit = 100) {
      return text.slice(0, limit) + "...";
    },

    apply (event) {
      console.log(event); // TODO replace with action
    }
  }
};
</script>
