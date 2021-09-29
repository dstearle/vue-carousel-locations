import { createStore } from 'vuex'

// State
const state = {
    
  // Array to store the image urls
  locImageUrls: '',
  
};

// Mutations
const mutations = {

  // Sets the state data for locImageUrls
  'SET_LOCIMAGEURLS' (state) {

    // Searches for the div on the page with an id of "specialsCarouselURLs"
    const test = document.getElementById('specialsCarouselURLs');

    // Turns the content of the div into a string
    let test2 = test.textContent;

    // Sets the state for locImageUrls with the string
    state.locImageUrls = test2;
              
  },

};

// Actions
const actions = {

  // Action for fetching image urls
  fetchLocImageUrls: ({ commit }, order) => {
      
    // Commits fetch for custom post type of 'location'
    commit('SET_LOCIMAGEURLS', order);
      
  },

};

// Getters
const getters = {
    
  // Getter for image urls
  locImageUrlsGet: state => {
      
    return state.locImageUrls;
      
  },

};

export default createStore({
  state,
  mutations,
  actions,
  getters
})
