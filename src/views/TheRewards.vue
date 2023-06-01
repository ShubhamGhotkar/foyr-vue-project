<template>
  <section class="reward-section">
    <the-header />
    <div class="center">
      <div class="rewards-info">
        <h2 class="rewards-heading">Rewards</h2>
        <p class="rewards-para" v-if="true">
          {{
            rewardsAvailable
              ? ` You have ${totalRewards} rewards available,please claim any of
          the Reawards below`
              : `These Rewards will be available to you once
          yours friends subscribes to Foyr Neo`
          }}
        </p>
      </div>
      <RewardCard
        :Reawards="RewardCardData"
        :rewardsAvailable="rewardsAvailable"
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
export default {
  data() {
    return {
      rewardsAvailable: this.$store.state.isRewardsAvailable,
      rewardCollected: false,
      totalRewards: 2,
      isShowPopUp: false,
      RewardCardData: [
        {
          id: "rewards-1",
          tittle: "$25 Promo Credits",
          path: "../assets/GoldCoinsEur.svg",
        },
        {
          id: "rewards-2",
          tittle: "1 Custom Model",
          path: "../assets/chair.svg",
        },
        {
          id: "rewards-3",
          tittle: "Acess to Export Floor + Elevation for 1 month",
          path: "../assets/KeyFolder.svg",
        },
      ],
    };
  },
  methods: {
    handleClick() {
      this.$store.commit("setCardShow");
    },
    showPopUp() {
      this.isShowPopUp = !this.isShowPopUp;
      this.$store.commit("isShowPopUp");
    },
  },

  components: {
    TheHeader,
    RewardCard,
    RewardsAdded,
  },

  beforeUpdate() {
    console.log(this.data);
    const { rewardsAvailable, rewardCollected, rewards } = this.data;
    this.rewardsAvailable = rewardsAvailable;
    this.rewardCollected = rewardCollected;
    this.rewards = rewards;
  },
};
</script>

<style scoped>
.reward-section {
  width: 100vw;
  background-color: whitesmoke;
  padding: 14.5rem 0 1.5rem 0;
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
