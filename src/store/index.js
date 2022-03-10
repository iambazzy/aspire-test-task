import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab: 0,
    modalVisible: false,
    cards: [
      {
        name: 'Basit Mir',
        lastDigits: '1222111111111111',
        thru: '1026',
        cvv: '333'
      },
      {
        name: 'Test Card',
        lastDigits: '1222111111111111',
        thru: '1126',
        cvv: '332'
      }
    ],
  },
  mutations: {
    setState(state, payload) {
      state[payload.key] = payload.value;
    }
  },
  actions: { },
  getters: {
    tab: state => state.tab,
    cards: state => state.cards,
    modalVisible: state => state.modalVisible
  },
  // I am not dividing into modules as of now cuz this 
  // can be done in a simple manner 
  // for the sake of test
  modules: { }
})
