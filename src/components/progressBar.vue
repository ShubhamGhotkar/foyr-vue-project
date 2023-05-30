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
          <img src="" alt="claim box" />
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
.claim {
  flex: 0 0 18%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transform: translateY(-25%);
}
.cliam_img {
  height: 10rem;
  width: 10rem;
  background-color: purple;
}

.claim_img img {
  width: 100%;
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
.progress {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;
}
/* Info */
.info {
  display: flex;
  font-size: 1.6rem;
  gap: 10rem;
  margin: 2rem 0 4rem 1.8rem;
}

.info span {
  font-weight: 300;
  color: rgb(162, 159, 159);
}
.info strong {
  font-weight: 600;
}

/*  */

.progress_container {
  background-color: white;
  padding: 1rem 3rem 0;
  border-radius: 1.2rem;
  margin-bottom: 7rem;
}
</style>
