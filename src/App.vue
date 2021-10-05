<template>

    <!-- Carousel Component -->
    <Carousel :locSpecials="this.locImageDataGet" :locSpecialsMobile="this.locImageMobileDataGet"/>

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

		// Fetches the image urls for mobile to be used by the carousel
		this.fetchLocImageMobileData();
		
	},

  	computed: {

		...mapGetters({
			
			// Retrieves the data for the carousel to be used on desktop
			locImageDataGet: 'locImageDataGet',

			// Retrieves the data for the carousel to be used on mobile
			locImageMobileDataGet: 'locImageMobileDataGet',
			
		}),

	},

	methods: {

		...mapActions({

			// Fetches the image data for desktop to be used by the carousel
			fetchLocImageData: 'fetchLocImageData',

			// Fetches the image data for mobile to be used by the carousel
			fetchLocImageMobileData: 'fetchLocImageMobileData',

		}),

	},

}

</script>

<style></style>
