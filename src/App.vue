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

  beforeMount() {

    // Fetches all meta data for 'location' custom post type
    this.fetchLocPosts();
	
  },

  computed: {

    ...mapGetters({
        
        // Retrieves the state for the retrieved custom post type
        locPostsDataGet: 'locPostsDataGet',
        
    }),

  },

  methods: {

    ...mapActions({

		// Retrieves the data for 'location' custom post type
        fetchLocPosts: 'fetchLocPosts',

    }),

  },

}

</script>

<style></style>
