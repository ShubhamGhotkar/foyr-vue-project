<template>
  <div class="container">
    <div class="popup">
      <div class="popup-img">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="right"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>
      <p class="popup-para">Congrates! Reward has been added to your account</p>
    </div>
    <div class="can-btn" @click="handleClick">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="can-btn-btn"
        @click="handleClick"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <div class="blur" @click="handleClick"></div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$store.commit("isShowPopUp");
    },
  },
};
</script>

<style scoped>
.container,
.blur {
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.29);

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  width: 25vw;
  background-color: white;
  padding: 3rem 1rem 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 2rem;
  transform: translateY(5%);
  z-index: 99;
}
.popup-img {
  width: 20rem;
  height: 15rem;

  display: grid;
  place-items: center;
}
.right {
  width: 100%;
  stroke: green;
}
.popup-para {
  font-size: 1.6rem;
  font-weight: 700;
  text-align: center;
  padding: 2rem;
}

.can-btn {
  height: 3.2rem;
  width: 3.2rem;
  cursor: pointer;

  position: absolute;
  top: 32%;
  left: 63%;
  z-index: 99;
}
.can-btn-btn {
  height: 100%;
  width: 100%;
  stroke: rgb(173, 171, 171);
  fill: white;
}

.blur {
  z-index: 12;
}
</style>
