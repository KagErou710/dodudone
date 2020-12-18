import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    like:[],
    place:[],
    place_detail: []

  },
  mutations: {
    like_save(state,value){
      state.like = value
    },
    place_save(state,value){
      state.place = value
    },
    place_detail_save(state,value){
      state.place_detail = value
    },
  }
})
