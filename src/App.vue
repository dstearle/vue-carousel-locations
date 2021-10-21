<template>

    <!-- Carousel Component -->
    <Carousel :locSpecials="this.locImageDataGet" />

</template>

<script>

import Carousel from './components/Carousel.vue';
import { mapGetters, mapActions } from 'vuex';


export default {

  	name: 'App',

  	components: { Carousel },

	beforeMount() {

		// Fetches the image urls for desktop to be used by the carousel
		this.fetchLocImageData();
		
	},

  	computed: {

		...mapGetters({
			
			// Retrieves the data for the carousel to be used on desktop
			locImageDataGet: 'locImageDataGet',
			
		}),

	},

	methods: {

		...mapActions({

			// Fetches the image data for desktop to be used by the carousel
			fetchLocImageData: 'fetchLocImageData',

		}),

	},

}

</script>

<style></style>
