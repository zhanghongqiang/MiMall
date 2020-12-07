import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
let state = {
  username: '',
  cartCount: 0
}

export default new Vuex.Store({
  state,
  actions,
  mutations
});