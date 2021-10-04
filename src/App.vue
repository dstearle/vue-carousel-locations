<template>

    <!-- Carousel Component -->
    <Carousel :locSpecials="this.locImageDataGet"/>

</template>

<script>

import Carousel from './components/Carousel.vue';
import { mapGetters, mapActions } from 'vuex';


export default {

  name: 'App',

  components: { Carousel },

  beforeMount() {

    // Fetches the image urls to be used by the carousel
    this.fetchLocImageData();
	
  },

  computed: {

    ...mapGetters({
        
        // Retrieves the state for the retrieved custom post type
        locImageDataGet: 'locImageDataGet',
        
    }),

  },

  methods: {

    ...mapActions({

		    // Fetches the image data to be used by the carousel
        fetchLocImageData: 'fetchLocImageData',

    }),

  },

}

</script>

<style></style>
