import { createStore } from 'vuex'

// State
const state = {
    
  // Array to store custom post types of 'location'
  locPostsData: [],
  
};

// Mutations
const mutations = {

  // Sets the state data for locPostsData
  'SET_LOCPOSTS' (state) {

    // Test URL for the custom post type
    var url = window.location.protocol + '//' + window.location.hostname + '/kog-champps-v2/wp-json/wp/v2/location/17';

    // Live URL for the custom post type
    // var url = window.location.protocol + '//' + window.location.hostname + '/wp-json/wp/v2/location?filter[orderby]=date&per_page=100';
    
    // Fetches the location posts from WordPress and sets them to the locPostsData array in the state
    fetch(url).then(
        (response)=>{
        return response.json()
    }).then((data)=>{
        state.locPostsData = data;
    })
              
  },

};

// Actions
const actions = {

  // Action for fetching metadata for custom post type of 'location'
  fetchLocPosts: ({ commit }, order) => {
      
    // Commints fetch for custom post type of 'location'
    commit('SET_LOCPOSTS', order);
      
  },

};

// Getters
const getters = {
    
  // Getter for custom post types of 'location'
  locPostsDataGet: state => {
      
    return state.locPostsData;
      
  },

};

export default createStore({
  state,
  mutations,
  actions,
  getters
})
