<template>
  <div class="step_container">
    <div class="steps">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        :class="getSvgStatus"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div class="path">
        <div v-for="num in 9" :key="num" :class="getPathStatus"></div>
      </div>
    </div>
    <div class="step-info">
      <span>STEP {{ num }}</span>
      <p>{{ arr[num - 1] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: null,
    };
  },
  props: {
    data: {
      require: true,
    },
    num: {
      require: true,
    },
  },

  computed: {
    getSvgStatus() {
      const { referralEmailSent, userSignedUpForFT, userSignedUpForNeo } =
        this.data.userTrackProgress;

      if (this.num === 1 && referralEmailSent) {
        return "fill step-svg";
      } else if (this.num === 2 && userSignedUpForFT && referralEmailSent) {
        return "fill step-svg";
      } else if (
        this.num === 3 &&
        userSignedUpForNeo &&
        userSignedUpForFT &&
        referralEmailSent
      ) {
        return "fill step-svg";
      } else {
        return "unfill step-svg";
      }
    },
    getPathStatus() {
      const { referralEmailSent, userSignedUpForFT, userSignedUpForNeo } =
        this.data.userTrackProgress;
      if (this.num === 1 && referralEmailSent) {
        return "dash back--gr";
      } else if (this.num === 2 && userSignedUpForFT && referralEmailSent) {
        return "dash back--gr";
      } else if (
        this.num === 3 &&
        userSignedUpForNeo &&
        userSignedUpForFT &&
        referralEmailSent
      ) {
        return "dash back--gr";
      } else {
        return "dash back--or";
      }
    },
  },

  mounted() {
    const keys = Object.keys(this.data.userTrackProgress);
    this.arr = keys;
  },
};
</script>

<style>
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
  gap: 1.2rem;
}
.path {
  flex: 0 0 80%;
  display: flex;
  justify-content: space-between;
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
