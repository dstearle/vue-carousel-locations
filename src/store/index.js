import { createStore } from 'vuex'

// State
const state = {
    
	// Array to store the image data for desktop
	locImageData: '',
  
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

};

// Actions
const actions = {

	// Action for fetching image data
	fetchLocImageData: ({ commit }, order) => {
		
		// Commits fetch for custom post type of 'location'
		commit('SET_LOC_IMAGE_DATA', order);
		
	},

};

// Getters
const getters = {
    
	// Getter for image data
	locImageDataGet: state => {
		
		return state.locImageData;
		
	},

};

export default createStore({
	state,
	mutations,
	actions,
	getters
})
