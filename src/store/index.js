import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCardShow: false,
    rewardsAvailableData: [],
    isShowPopUp: false,
    isRewardsAvailable: false,
  },
  getters: {},
  mutations: {
    setCardShow() {
      this.state.isCardShow = !this.state.isCardShow;
    },
    isShowPopUp() {
      this.state.isShowPopUp = !this.state.isShowPopUp;
    },
    rewardsAvailable() {
      this.state.isRewardsAvailable = !this.state.isRewardsAvailable;
    },
  },
  actions: {},
  modules: {},
});

