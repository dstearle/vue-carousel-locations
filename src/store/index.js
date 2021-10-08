import { createStore } from 'vuex'

// State
const state = {
    
	// Array to store the image data for desktop
	locImageData: '',

	// Array to store the image data for mobile
	locImageMobileData: '',

	// The current width of the window
	windowWidth: window.innerWidth,
  
};

// Mutations
const mutations = {

	// Sets the state data for locImageData
	'SET_LOC_IMAGE_DATA' (state) {

		// Searches for the div on the page with an id of "specialsCarouselData"
		const arr = document.getElementById('specialsCarouselData');

		// Turns the content of the div into a string
		const arr2 = arr.textContent;

		// Parses the string into an array
		const arr3 = JSON.parse(arr2);

		// Sets the state for locImageData with the array
		state.locImageData = arr3;
				
	},

	// Sets the state data for locImageMobileData
	'SET_LOC_IMAGE_MOBILE_DATA' (state) {

		// Searches for the div on the page with an id of "specialsCarouselMobileData"
		const arr = document.getElementById('specialsCarouselMobileData');

		// Turns the content of the div into a string
		const arr2 = arr.textContent;

		// Parses the string into an array
		const arr3 = JSON.parse(arr2);

		// Sets the state for locImageMobileData with the array
		state.locImageMobileData = arr3;
              
	},

	// Sets the state for windwWidth
	setWindowWidth(state) {

  		state.windowWidth = window.innerWidth;

  	}

};

// Actions
const actions = {

	// Action for fetching image data
	fetchLocImageData: ({ commit }, order) => {
		
		// Commits fetch for custom post type of 'location'
		commit('SET_LOC_IMAGE_DATA', order);
		
	},

	// Action for fetching image data for mobile
	fetchLocImageMobileData: ({ commit }, order) => {
		
		// Commits fetch for custom post type of 'location'
		commit('SET_LOC_IMAGE_MOBILE_DATA', order);
		
	},

};

// Getters
const getters = {
    
	// Getter for image data
	locImageDataGet: state => {
		
		return state.locImageData;
		
	},

	// Getter for image data for mobile
	locImageMobileDataGet: state => {
		
		return state.locImageMobileData;
		
	},

};

export default createStore({
	state,
	mutations,
	actions,
	getters
})
