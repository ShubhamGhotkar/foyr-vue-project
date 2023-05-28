<template>
  <div class="referCard_container" v-if="show">
    <div class="card">
      <h2 class="card-heading">Refer a Friend</h2>
      <input
        type="email"
        placeholder="Enter your friend email id"
        class="card-input"
        v-model="inputData"
      />
      <button class="ref-btn button" @click="setShow">Send Invite</button>
      <p class="card-para">You will recieve upto 50% off on plans!</p>
    </div>
    <div class="card-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="card-btn-svg"
        @click="setShow"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      inputData: "",
    };
  },
  methods: {
    setShow() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.referCard_container {
  width: 50rem;

  position: absolute;
  z-index: 99999;
}
.card {
  width: 50rem;
  padding: 2rem 3.5rem;
  border-radius: 1.5rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}
.card-heading {
  font-size: 2.4rem;
  font-weight: 550;
}
.card-para {
  font-size: 1.8rem;
  font-weight: 500;
}
.card-input,
.card-input:active,
.card-input:focus,
.card-input:visited {
  width: 100%;
  padding: 0.8rem 3.5rem;
  border-radius: 0.8rem;
  border: 0.2rem solid whitesmoke;
  font-size: 1.6rem;
}

.card-input::placeholder {
  font-size: 1.4rem;
  font-weight: 400;
}
.card-btn {
  height: 3.4rem;
  width: 3.4rem;
  align-self: flex-start;

  position: absolute;
  top: -0.4rem;
  right: -4rem;
}
.card-btn:hover {
  cursor: pointer;
}
.card-btn-svg {
  stroke: rgba(185, 179, 179, 0.767);
  fill: white;
  border: none;
}

button {
  border: none;
}
</style>
