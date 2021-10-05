<template>

    <!-- Carousel Component -->
    <Carousel :locSpecials="this.locImageDataGet" :locSpecialsMobile="this.locImageMobileDataGet" :windowWith="this.windowWidth"/>

</template>

<script>

import Carousel from './components/Carousel.vue';
import { mapGetters, mapActions } from 'vuex';


export default {

  	name: 'App',

  	components: { Carousel },

	created() {

		window.addEventListener('resize', () => {

			this.$store.commit('setWindowWidth');

		})

	},

	destroyed() {

        window.removeEventListener();

    },

	beforeMount() {

		// Fetches the image urls for desktop to be used by the carousel
		this.fetchLocImageData();

		// Fetches the image urls for mobile to be used by the carousel
		this.fetchLocImageMobileData();
		
	},

	data() {

		return {

			window: { width: 0 }
			
		};
		
	},

  	computed: {

		...mapGetters({
			
			// Retrieves the data for the carousel to be used on desktop
			locImageDataGet: 'locImageDataGet',

			// Retrieves the data for the carousel to be used on mobile
			locImageMobileDataGet: 'locImageMobileDataGet',
			
		}),

		windowWidth() {

			return this.$store.state.windowWidth;

		}

	},

	methods: {

		...mapActions({

			// Fetches the image data for desktop to be used by the carousel
			fetchLocImageData: 'fetchLocImageData',

			// Fetches the image data for mobile to be used by the carousel
			fetchLocImageMobileData: 'fetchLocImageMobileData',

		}),

		handleResize() {

			return this.window.width = window.innerWidth;
			
		},

	},

}

</script>

<style></style>
