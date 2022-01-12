import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal= new VuexPersistence({
  storage:window.localStorage
})


Vue.use(Vuex)


export default new Vuex.Store({
  plugins:[vuexLocal.plugin],
  state: {
    ouestlepomsky:" ",
    lumieres:{
      salon: false,
      chambre:false
    }
  },
  mutations: {
    setouestlepomsky(state, piece){
state.ouestlepomsky = piece;
    },
    setLumiere(state, piece){
      state.lumieres[piece] =  !state.lumieres[piece];
    }
  },
  actions: {
  },
  modules: {
  }
})