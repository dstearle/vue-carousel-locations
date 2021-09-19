import { createStore } from 'vuex'

// State
const state = {
    
  // Array to store custom post types of 'menu'
  menuPostsData: [],
  
};

// Mutations
const mutations = {

  // Sets the state data for menuPostsData
  'SET_MENUPOSTS' (state) {

    // Test URL for the custom post type
    var url = window.location.protocol + '//' + window.location.hostname + '/kog-champps-v2/wp-json/wp/v2/menu?filter[orderby]=date&per_page=100';

    // Live URL for the custom post type
    // var url = window.menu.protocol + '//' + window.menu.hostname + '/wp-json/wp/v2/menu?filter[orderby]=date&per_page=100';
    
    // Fetches the menu posts from WordPress and sets them to the menuPostsData array in the state
    fetch(url).then(
        (response)=>{
        return response.json()
    }).then((data)=>{
        state.menuPostsData = data;
    })
              
  },

};

// Actions
const actions = {

  // Action for fetching metadata for custom post type of 'menu'
  fetchMenuPosts: ({ commit }, order) => {
      
    // Commints fetch for custom post type of 'menu'
    commit('SET_MENUPOSTS', order);
      
  },

};

// Getters
const getters = {
    
  // Getter for custom post types of 'menu'
  menuPostsDataGet: state => {
      
    return state.menuPostsData;
      
  },

};

export default createStore({
  state,
  mutations,
  actions,
  getters
})
