<template>

    <!-- Carousel Component -->
    <Carousel :locSpecials="this.locPostsDataGet"/>

</template>

<script>

import Carousel from './components/Carousel.vue';
import { mapGetters, mapActions } from 'vuex';


export default {

  name: 'App',

  components: { Carousel },

  mounted() {
    // Fetches all meta data for 'location' custom post type
    this.fetchLocPosts();
  },

  computed: {

    ...mapGetters({
        
        // Retrieves the data for 'menu' custom post type
        locPostsDataGet: 'locPostsDataGet',
        
    }),

  },

  methods: {

    ...mapActions({
        fetchLocPosts: 'fetchLocPosts',
    }),

  },

}

</script>

<style></style>
