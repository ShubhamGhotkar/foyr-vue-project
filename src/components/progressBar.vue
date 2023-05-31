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
    <div class="progress">
      <ProgressStep
        v-for="num in 3"
        :key="num"
        :data="data"
        :num="num"
      ></ProgressStep>
      <div class="claim">
        <div class="cliam_img">
          <img src="../assets/rewards-img1.png" alt="claim-box-img" />
        </div>
        <div class="claim-info">
          <div class="claim-para">Rewards Awailable</div>
          <button class="claim-btn">claim now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProgressStep from "./ProgressStep.vue";
export default {
  props: {
    data: {
      require: true,
    },
  },
  components: { ProgressStep },
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
  gap: 0.2rem;
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
</style>
