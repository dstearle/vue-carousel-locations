<template>

    <!-- Carousel Component -->
    <Carousel />

</template>

<script>

import Carousel from './components/Carousel.vue';
import { mapGetters, mapActions } from 'vuex';


export default {

  name: 'App',

  components: { Carousel },

  mounted() {
    // Fetches all meta data for 'location' custom post type
    this.fetchMenuPosts();
  },

  computed: {

    ...mapGetters({
        
        // Retrieves the data for 'menu' custom post type
        menuPostsDataGet: 'menuPostsDataGet',
        
    }),

  },

  methods: {

    ...mapActions({
        fetchMenuPosts: 'fetchMenuPosts',
    }),

  },

}

</script>

<style></style>
