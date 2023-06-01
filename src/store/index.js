import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCardShow: false,
    claimData: [],
    dummyData: [
      {
        name: "ref test 1",
        email: "xyz@gmail.com",
        refereeId: "63e364099a87b41c72a4f2145",
        rewardCollected: false,
        userTrackProgress: {
          referralEmailSent: true,
          userSignedUpForFT: false,
          userSignedUpForNeo: false,
          rewardsAvailable: false,
        },
      },
      {
        name: "Ref test 2",
        email: "reftest2@yopmail.com",
        refereeId: "63e364099a87b41c72a4f287",
        rewardCollected: false,
        rewards: null,
        userTrackProgress: {
          referralEmailSent: true,
          userSignedUpForFT: true,
          userSignedUpForNeo: false,
          rewardsAvailable: false,
        },
      },
      {
        name: "Ref test 3",
        email: "reftest1@yopmail.com",
        refereeId: "63e364099a87b41c72a4f245",
        rewardCollected: false,
        rewards: null,
        userTrackProgress: {
          referralEmailSent: true,
          userSignedUpForFT: true,
          userSignedUpForNeo: true,
          rewardsAvailable: false,
        },
      },
      {
        name: "Referral 4",
        email: "referraltest1@yopmail.com",
        refereeId: "63e364099a87b41c72a4f293",
        rewards: 1,
        rewardCollected: true,
        userTrackProgress: {
          referralEmailSent: true,
          userSignedUpForFT: true,
          userSignedUpForNeo: true,
          rewardsAvailable: true,
        },
      },
      {
        name: "Referral 4",
        email: "referraltest1@yopmail.com",
        refereeId: "63e364099a87b41c72a4f297",
        rewardCollected: true,
        rewards: 5,
        userTrackProgress: {
          referralEmailSent: true,
          userSignedUpForFT: true,
          userSignedUpForNeo: true,
          rewardsAvailable: true,
        },
      },
    ],
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

    updataClaimData(state, payload) {
      state.claimData = payload;
    },

    updataData(state, payload) {
      state.dummyData = state.dummyData.find((data) => {
        if (data.refereeId === payload.refereeId) {
          return (data = payload);
        }
        return data;
      });

      // console.log(state.dummyData);
    },
  },
  actions: {},
  modules: {},
});
