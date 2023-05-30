<template>
  <section class="center">
    <h2 class="pregress-heading">Referral Progress</h2>
    <progressBar
      v-for="data in progressData"
      :key="data.refereeId"
      :data="data"
    ></progressBar>
  </section>
</template>

<script>
import progressBar from "@/components/progressBar.vue";
export default {
  data() {
    return {
      progressData: [
        {
          name: "ref test 1",
          email: "xyz@gmail.com",
          refereeId: "63e364099a87b41c72a4f2145",
          rewardCollected: false,
          userTrackProgress: {
            referralEmailSent: true,
            userSignedUpForFT: true,
            userSignedUpForNeo: false,
            rewardsAvailable: false,
          },
        },
        {
          name: "Ref test 2",
          email: "reftest2@yopmail.com",
          refereeId: "63e364099a87b41c72a4f287",
          rewardCollected: false,
          userTrackProgress: {
            referralEmailSent: true,
            userSignedUpForFT: true,
            userSignedUpForNeo: true,
            rewardsAvailable: false,
          },
        },
        {
          name: "Ref test 3",
          email: "reftest1@yopmail.com",
          refereeId: "63e364099a87b41c72a4f245",
          rewardCollected: false,
          userTrackProgress: {
            referralEmailSent: true,
            userSignedUpForFT: false,
            userSignedUpForNeo: false,
            rewardsAvailable: false,
          },
        },
        {
          name: "Referral 4",
          email: "referraltest1@yopmail.com",
          refereeId: "63e364099a87b41c72a4f293",
          rewardCollected: false,
          userTrackProgress: {
            referralEmailSent: true,
            userSignedUpForFT: true,
            userSignedUpForNeo: false,
            rewardsAvailable: true,
          },
        },
      ],
    };
  },
  components: { progressBar },
};
</script>

<style scoped>
.pregress-heading {
  font-size: 3.6rem;
  margin: 6rem 0 3rem 0;
}
</style>
