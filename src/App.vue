<template>

    <!-- Carousel Component -->
    <Carousel :locSpecials="this.locImageUrlsGet"/>

</template>

<script>

import Carousel from './components/Carousel.vue';
import { mapGetters, mapActions } from 'vuex';


export default {

  name: 'App',

  components: { Carousel },

  beforeMount() {

    // Fetches the image urls to be used by the carousel
    this.fetchLocImageUrls();
	
  },

  computed: {

    ...mapGetters({
        
        // Retrieves the state for the retrieved custom post type
        locImageUrlsGet: 'locImageUrlsGet',
        
    }),

  },

  methods: {

    ...mapActions({

		    // Fetches the image urls to be used by the carousel
        fetchLocImageUrls: 'fetchLocImageUrls',

    }),

  },

}

</script>

<style></style>
