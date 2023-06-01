<template>
  <section class="reward-section">
    <the-header />
    <div class="center">
      <div class="rewards-info">
        <h2 class="rewards-heading">Rewards</h2>
        <p class="rewards-para">
          {{
            rewardsAvailable
              ? ` You have ${rewardsData.rewards} rewards available,please claim any of
          the Reawards below`
              : `These Rewards will be available to you once
          yours friends subscribes to Foyr Neo`
          }}
        </p>
      </div>
      <RewardCard
        :Reawards="RewardCardData"
        :rewardsAvailable="rewardsAvailable"
        @radioOptionData="radioOptionData"
      ></RewardCard>

      <span class="span-btn" v-if="!rewardsAvailable"
        ><button class="main-btn ref-btn" @click="handleClick">
          Refer Now to earn rewards
        </button></span
      >
      <span class="span-btn" v-if="rewardsAvailable"
        ><button class="main-btn ref-btn" @click="showPopUp">
          Avail Now
        </button></span
      >
    </div>
    <RewardsAdded v-if="this.$store.state.isShowPopUp" />
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import RewardCard from "../components/RewardCard.vue";
import RewardsAdded from "../components/RewardsAdded.vue";
import img1 from "../assets/GoldCoinsEur.svg";
import img2 from "../assets/chair.svg";
import img3 from "../assets/KeyFolder.svg";
export default {
  components: {
    TheHeader,
    RewardCard,
    RewardsAdded,
  },
  data() {
    return {
      rewardsData: this.$store.state.claimData,
      rewardsAvailable: false,
      rewardCollected: false,
      totalRewards: 2,
      isShowPopUp: false,
      selectClaim: null,
      RewardCardData: [
        {
          id: "rewards-1",
          tittle: "$25 Promo Credits",
          path: img1,
        },
        {
          id: "rewards-2",
          tittle: "1 Custom Model",
          path: img2,
        },
        {
          id: "rewards-3",
          tittle: "Acess to Export Floor + Elevation for 1 month",
          path: img3,
        },
      ],
    };
  },

  methods: {
    handleClick() {
      this.$store.commit("setCardShow");
    },
    showPopUp() {
      console.log(this.rewardsData.rewards);

      let updateData = this.$store.state.dummyData.map((val) => {
        if (val.refereeId === this.rewardsData.refereeId) {
          val.rewards -= this.selectClaim;

          // if (val.rewards === 0) {
          // val.userTrackProgress.rewardsAvailable = false;
          // }
        }
        return val;
      });
      this.$store.state.dummyData = updateData;
      this.rewardsAvailable = false;
      this.rewardsData.rewardsAvailable = !this.rewardsData.rewardsAvailable;
      console.log(this.$store.state.dummyData);
      // this.rewardsData.rewards -= this.selectClaim;
      // if (
      //   this.rewardsData.rewards > 0 &&
      //   this.selectClaim <= this.rewardsData.rewards
      // ) {
      //   this.rewards.rewards -= this.selectClaim;
      // } else {
      //   this.rewards.rewards = 0;
      // }
      // console.log(this.rewardsData.rewards);
      this.$store.commit("updataData", this.rewardsData);

      setTimeout(() => {
        this.isShowPopUp = !this.isShowPopUp;
        this.$store.commit("isShowPopUp");
      }, 300);
    },
    radioOptionData(data) {
      this.selectClaim = data.length;
    },
  },

  beforeMount() {
    if (this.rewardsData) {
      const { userTrackProgress, rewardCollected, rewards } = this.rewardsData;
      this.rewardsAvailable = userTrackProgress.rewardsAvailable;
      this.rewardCollected = rewardCollected;
      this.rewards = rewards;
    } else {
      console.log("Data is Not Present Here");
    }
  },
};
</script>

<style scoped>
.reward-section {
  width: 100vw;
  background-color: whitesmoke;
  padding: 13rem 0 1.5rem 0;
}

.rewards-info {
  height: auto;
  width: 30%;
}
.rewards-heading {
  font-size: 4rem;
  margin-bottom: 2rem;
}
.rewards-para {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.4;
}
.span-btn {
  width: 100%;

  display: grid;
  place-items: center;
}
.ref-btn {
  border: none;
}

@media only screen and (max-width: 1390px) {
  .rewards-info {
    width: 40%;
    padding-right: 5rem;
  }
}
@media only screen and (max-width: 1190px) {
  .rewards-info {
    padding-right: 0;
  }
}
@media only screen and (max-width: 840px) {
  .rewards-info {
    width: 60%;
  }
}

/* Rewards Container */
</style>
