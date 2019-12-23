import Vue from 'vue'
import Vuex from 'vuex'
import Json from './../assets/API.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    mydata: Json
  }
})
