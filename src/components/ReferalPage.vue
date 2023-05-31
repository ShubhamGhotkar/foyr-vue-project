<template>
  <div class="referal_container center">
    <div class="info">
      <h2 class="info_heading">NEO Referral Program</h2>
      <p class="info_para">
        Earn rewards worth upto $100 every time a friend of yours subscribes to
        Foyr Neo
      </p>
      <span
        ><button class="main-btn ref-btn" @click="handleClick">
          Refer Now
        </button></span
      >
    </div>
    <div class="image">
      <img src="../assets/refer-img.png" alt="refer-image" class="ref-image" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$store.commit("setCardShow");
    },
  },
};
</script>

<style scoped>
.referal_container {
  display: flex;
  justify-content: space-between;
  padding: 7rem 0;
}
.info {
  flex: 0 0 40%;

  display: flex;
  flex-direction: column;
  gap: 2.3rem;
}

.info span {
  margin-top: 2rem;
}
.info_heading {
  font-size: 4rem;
}
.info_para {
  font-size: 2.4rem;
  padding: 0 15rem 0 0;
  line-height: 1.4;
}
.image {
  flex: 0 0 50%;

  display: grid;
  place-items: center;
}
.ref-image {
  width: 70%;
}

.ref-btn {
  border: none;
}

@media only screen and (max-width: 1344px) {
  .info_para {
    padding: 0 11rem 0 0;
  }
}
@media only screen and (max-width: 1240px) {
  .info_para {
    padding: 0 6.9rem 0 0;
  }
}
@media only screen and (max-width: 950px) {
  .referal_container {
    flex-direction: column-reverse;
    gap: 10rem;
  }

  .info {
    text-align: center;
  }

  .info_para {
    text-align: center;
    padding: 0 1rem;
  }
}
</style>
