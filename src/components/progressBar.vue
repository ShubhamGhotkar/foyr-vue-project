<template>
  <section class="progress_container center">
    <div class="info">
      <p>
        <span>Name </span><strong>{{ data.name }}</strong>
      </p>
      <p>
        <span>EMAIL </span><strong>{{ data.email }}</strong>
      </p>
    </div>

    <!--Progress Component  -->
    <div class="progress">
      <!-- numOfStep is for find out the length of userTrack length -->
      <div class="step_container" v-for="step in numOfStep" :key="step">
        <div class="steps">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            :class="getSvgStatus(step)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div class="path">
            <div
              v-for="nums in 9"
              :key="nums"
              :class="getPathStatus(step)"
            ></div>
          </div>
        </div>
        <div class="step-info">
          <span>STEP {{ step }}</span>
          <p>{{ arr[step - 1] }}</p>
        </div>
      </div>

      <!-- claim box  if Rewards not available-->
      <div class="claim-svg" v-if="!rewardsAvailable">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          :class="isRewardCollected"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <div class="step-info">
          <span>STEP 4</span>
          <p>{{ rewardCollected ? "Reward Collected" : "Reward Available" }}</p>
        </div>
      </div>

      <!-- claim box  if Rewards  available-->
      <div class="claim" v-if="rewardsAvailable">
        <div class="cliam_img">
          <img src="../assets/GiftBox.svg" alt="claim-box-img" />
        </div>
        <div class="claim-info">
          <div class="claim-para">Rewards Awailable</div>

          <router-link to="/reward"
            ><button
              class="claim-btn"
              :class="!rewardCollected && 'inactive'"
              @click="handleClick"
            >
              claim now
            </button></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      require: true,
    },
  },

  data() {
    return {
      numOfStep: null,
      rewardsAvailable: false,
      rewardCollected: false,
      arr: null,
    };
  },

  methods: {
    handleClick() {
      this.$store.commit("rewardsAvailable");
      this.$store.commit("updataClaimData", this.data);
    },

    newFunct(num, para1, para2) {
      let stepNum = num;
      // distructure the data
      const { referralEmailSent, userSignedUpForFT, userSignedUpForNeo } =
        this.data.userTrackProgress;

      if (stepNum === 1 && referralEmailSent) {
        return para1;
      } else if (stepNum === 2 && userSignedUpForFT && referralEmailSent) {
        return para1;
      } else if (
        stepNum === 3 &&
        userSignedUpForNeo &&
        userSignedUpForFT &&
        referralEmailSent
      ) {
        return para1;
      } else {
        return para2;
      }
    },
    getPathStatus(num) {
      let stepNum = num;
      return this.newFunct(stepNum, "dash back--gr", "dash back--or");
    },

    getSvgStatus(track) {
      let statusPath = track;
      return this.newFunct(statusPath, "fill step-svg", "unfill step-svg");
    },
  },

  beforeMount() {
    const { rewardCollected, userTrackProgress } = this.data;
    this.numOfStep = Object.keys(userTrackProgress).length - 1;
    this.rewardsAvailable = userTrackProgress.rewardsAvailable;
    this.rewardCollected = rewardCollected;

    /*imported */
    let keys = Object.keys(this.data.userTrackProgress);
    keys = keys.map((val) => {
      val = val.charAt(0).toUpperCase() + val.slice(1);
      return val
        .toString()
        .split(/(?=[A-Z])/)
        .join(" ");
    });

    this.arr = keys;
  },

  computed: {
    isRewardCollected() {
      return this.rewardCollected ? "svg-icon svg--gr" : "svg-icon";
    },
  },
};
</script>

<style scoped>
.progress_container {
  background-color: white;
  padding: 1rem 4rem 1.5rem 4rem;
  border-radius: 1.2rem;
  margin-bottom: 3rem;
}

/* Info */
.info {
  display: flex;
  font-size: 1.6rem;
  gap: 10rem;
  padding-top: 1rem;
}

.info span {
  font-weight: 300;
  color: rgb(162, 159, 159);
}
.info strong {
  font-weight: 600;
}

/* Progress */
.progress {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* gap: 0.2rem; */
}

/* claim */
.claim {
  flex: 0 0 15%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-left: -4.5rem;
}
.cliam_img {
  height: 10rem;
  width: 10rem;
}

.claim img {
  height: 100%;
}

.claim-para {
  font-size: 1.4rem;
  text-align: center;
}
.claim-btn {
  font-size: 1.4;
  font-weight: 650;
  margin-top: 1.2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 100px;
  background-color: white;
  border: 2px solid rgb(9, 170, 9);
  color: rgb(9, 170, 9);
  cursor: pointer;
}

.claim-svg {
  flex: 0 0 15%;
  height: max-content;
  display: grid;
  align-items: center;

  padding: 4.6rem 0;
}

.svg-icon {
  height: 3.8rem;
  width: 3.8rem;
  stroke: orange;
}

.svg--gr {
  stroke: green;
}

.inactive {
  pointer-events: none;
  opacity: 0.3;
  border: 2px solid gray;
  color: gray;
}
/*  */

@media only screen and (max-width: 770px) {
  .claim {
    margin-left: -2.5rem;
    justify-content: center;
  }
  .claim-btn {
    padding: 0.5rem 1rem;
  }
  .info {
    gap: 7rem;
  }
}
@media only screen and (max-width: 690px) {
  .claim {
    margin-left: 0rem;
    justify-content: center;
  }
  .claim-btn {
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
  }
  .info {
    gap: 5rem;
  }
  .cliam_img {
    height: 8rem;
    width: 8rem;
  }
}
@media only screen and (max-width: 560px) {
  .cliam_img {
    height: 6rem;
    width: 6rem;
    transform: translateY(10%);
  }
}

/*Imported */

.step_container {
  flex: 0 0 29%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.steps {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.path {
  flex: 0 0 90%;
  display: flex;
  justify-content: space-between;
  height: 1px;
}

.dash {
  flex: 0 0 10%;
  height: 1.5px;
  background-color: green;
}
.step-svg {
  height: 3.8rem;
  width: 3.8rem;
}

/* step info */
.step-info {
  margin-top: 1.2rem;
  margin-left: 1rem;
  font-family: sans-serif;
}
.step-info span {
  margin-top: 1.2rem;
  font-size: 1rem;
  font-weight: 350;
  color: rgb(162, 159, 159);
}
.step-info p {
  margin-top: 0.6rem;
  font-size: 1.4rem;
  font-weight: 500;
}

/* Common Classes */

.fill {
  fill: green;
  stroke: white;
}
.unfill {
  stroke: orange;
}
.back--gr {
  background-color: green;
}
.back--or {
  background-color: orange;
}
</style>
