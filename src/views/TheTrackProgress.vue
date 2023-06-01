<template>
  <section class="progress-track_container">
    <div class="center">
      <h2 class="pregress-heading">Referral Progress</h2>
      <progressBar
        v-for="data in progressData"
        :key="data.refereeId"
        :data="data"
      ></progressBar>
    </div>
  </section>
</template>

<script>
import progressBar from "@/components/progressBar.vue";
export default {
  data() {
    return {
      progressData: this.$store.state.dummyData,
    };
  },
  components: { progressBar },

  mounted() {
    this.progressData = this.$store.state.dummyData;
  },
};
</script>

<style scoped>
.progress-track_container {
  width: 100vw;
  padding: 14rem 0 5rem 0;
  background: whitesmoke;
}
.pregress-heading {
  font-size: 3.6rem;
  margin-bottom: 2.4rem;
}
</style>
