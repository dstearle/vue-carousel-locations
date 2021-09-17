import { createStore } from 'vuex'

// State
const state = {
    
  // Array to store custom post types of 'menu'
  menuPostsData: [],
  
};

// Mutations
const mutations = {

  // Sets the state data for menuPostsData
  'SET_LOCPOSTS' (state) {

    // Test URL for the custom post type
    var url = window.menu.protocol + '//' + window.menu.hostname + '/kog-champps-v2/wp-json/wp/v2/menu?filter[orderby]=date&per_page=100';

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

}

export default createStore({
  state,
  mutations,
  actions,
})
