<template>
  <section class="faq-section">
    <div class="center">
      <h2 class="heading">Frequently Asked Questions</h2>

      <!-- Question data will be render here..! -->
      <questio-carousel :Datas="Datas" />
    </div>
  </section>
</template>

<script>
import QuestioCarousel from "@/components/FAQsCarousel.vue";

export default {
  components: { QuestioCarousel },
  data() {
    return {
      // Array foe adding question and Answer here..!
      Datas: [
        {
          tittle: "How many people can i refer?",
          description:
            "There is no limit,the more you refer,the more you earn!",
        },
        {
          tittle: "How will I know when my friend subscribed?",
          description:
            "You will get an email when your friend subscribes and you can go to the rewards section to avail your rewards.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.faq-section {
  width: 100vw;
  padding-top: 5rem;
  background-color: whitesmoke;
}

.heading {
  font-size: 3.2rem;
  padding: 11rem 0 1.5rem 0;
}
</style>
