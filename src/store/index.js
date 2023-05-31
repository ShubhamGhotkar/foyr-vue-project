import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCardShow: false,
  },
  getters: {},
  mutations: {
    setCardShow() {
      this.state.isCardShow = !this.state.isCardShow;
    },
  },
  actions: {},
  modules: {},
});
