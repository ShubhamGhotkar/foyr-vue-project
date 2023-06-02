<template>
  <section class="reward-section">
    <!-- Header Parts -->
    <the-header />

    <!-- The Reward Section will render Here -->
    <div class="center">
      <!-- Information Data -->
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

      <!-- Rewards Cards  -->
      <RewardCard
        :Reawards="RewardCardData"
        :rewardsAvailable="rewardsAvailable"
        @radioOptionData="radioOptionData"
      ></RewardCard>

      <!-- If user visit to this page first time Or no awards  -->
      <span class="span-btn" v-if="!rewardsAvailable"
        ><button class="main-btn ref-btn" @click="handleClick">
          Refer Now to earn rewards
        </button></span
      >

      <!-- To Added Awards -->
      <span class="span-btn" v-if="rewardsAvailable"
        ><button class="main-btn ref-btn" @click="showPopUp">
          Avail Now
        </button></span
      >
    </div>
    <!-- reward Added PopUp -->
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
      // To check Claim Data
      rewardsData: this.$store.state.claimData,
      rewardsAvailable: false,
      rewardCollected: false,
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
      let updateData = this.$store.state.dummyData.map((val) => {
        if (val.refereeId === this.rewardsData.refereeId) {
          val.rewards -= this.selectClaim;
        }
        if (val.rewards == 0) {
          val.userTrackProgress.rewardsAvailable = false;
        }
        return val;
      });

      setTimeout(() => {
        this.$store.state.dummyData = [...updateData];
        this.rewardsAvailable = false;
        this.rewardsData.rewardsAvailable = !this.rewardsData.rewardsAvailable;
        this.$store.commit("isShowPopUp");
      }, 200);
    },

    // To find out how much rewards collected
    radioOptionData(data) {
      this.selectClaim = data.length;
    },
  },

  mounted() {
    if (this.rewardsData) {
      const { userTrackProgress, rewardCollected, rewards } = this.rewardsData;
      this.rewardsAvailable = userTrackProgress.rewardsAvailable;
      this.rewardCollected = rewardCollected;
      this.rewards = rewards;
    } else {
      this.rewardsAvailable = false;
      console.log("Data is Not Present Here");
    }
  },
};
</script>

<style scoped>
.reward-section {
  width: 100vw;
  background-color: whitesmoke;
  padding: 13.5rem 0 1.5rem 0;
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
  margin-bottom: 1.2rem;
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
