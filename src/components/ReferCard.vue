<template>
  <article class="article">
    <div class="referCard_container ref-card">
      <div class="card">
        <h2 class="card-heading">Refer a Friend</h2>
        <input
          type="email"
          placeholder="Enter your friend email id"
          class="card-input"
          v-model="inputData"
        />
        <button class="main-btn button" @click="handleClick">
          Send Invite
        </button>
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
          @click="handleClick"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
    <div class="blur-div" @click="handleClick"></div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      inputData: "",
    };
  },
  methods: {
    handleClick() {
      this.$store.commit("setCardShow");
    },
  },
};
</script>

<style scoped>
.blur-div {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.332);
}
.referCard_container {
  width: 50rem;
  z-index: 199;
}
.card {
  width: 50rem;
  padding: 2rem 3.5rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 1.2rem;
}
.card-heading {
  font-size: 2.4rem;
  font-weight: 500;
}
.card-para {
  font-size: 1.6rem;
  font-weight: 500;
}
input,
input:active,
input:focus,
input:visited {
  width: 100%;
  padding: 1rem 3.5rem;
  border-radius: 0.8rem;
  border: 0.2rem solid whitesmoke;
  font-size: 1.6rem;
  outline: none;
}

input::placeholder {
  font-size: 1.4rem;
  font-weight: 300;
  color: rgb(205, 204, 204);
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

.div {
  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.332);
}
.ref-card {
  z-index: 99999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 1.2rem;
}
</style>
