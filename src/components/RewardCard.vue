<template>
  <section>
    <div class="cards_container">
      <div
        class="reward-card_container"
        v-for="reward in Reawards"
        :key="reward.id"
      >
        <div class="reward-card_img">
          <img :src="reward.path" alt="reward_img" class="rewards--img" />
        </div>
        <p class="reward-info">
          <strong>{{ reward.tittle }}</strong>
        </p>
      </div>
    </div>
    <!-- Radio button -->
    <div :class="getClass">
      <input
        type="radio"
        v-model="selectedOption"
        v-for="reawardBtn in Reawards"
        :key="reawardBtn.id"
        :value="reawardBtn.id"
        :name="reawardBtn.id"
        class="rd-btn"
        @change="handleChange"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: ["Reawards", "rewardsAvailable"],

  data() {
    return {
      selectedOption: [],
    };
  },

  methods: {
    show() {
      console.log(this.selectedOption);
    },
    handleChange() {
      this.$emit("radioOptionData", [this.selectedOption]);
    },
  },
  computed: {
    getClass() {
      if (this.rewardsAvailable) {
        return "radio-btn_containr";
      } else {
        return "radio-btn_containr hidden";
      }
    },
  },
};
</script>

<style>
.hidden {
  visibility: hidden;
}
/* Radio Button */
.radio-btn_containr {
  width: 100%;
  padding: 0;
  margin-top: -3rem;
  padding-bottom: 3.6rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30%;
}

.rd-btn {
  height: 2.2rem;
  width: 2.2rem;
  cursor: pointer;
}

/*  */
.cards_container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding: 1rem 1rem 1.4rem 1rem;
  margin: 3rem 0;
}
.reward-card_container {
  flex: 0 0 22%;
  height: max-content;
  background-color: white;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}
.reward-card_img {
  height: 60%;
  width: 60%;

  display: grid;
  place-items: center;
}
.rewards--img {
  width: 100%;
}
.reward-info {
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
}
</style>
