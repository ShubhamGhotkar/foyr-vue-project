<template>
  <section>
    <the-header-vue></the-header-vue>
    <h2 class="heading"></h2>
    <questio-carousel :Datas="Datas"></questio-carousel>
  </section>
</template>

<script>
import TheHeaderVue from "@/components/TheHeader.vue";
import QuestioCarousel from "@/components/TheFAQsCarousel.vue";

export default {
  components: { TheHeaderVue, QuestioCarousel },
  data() {
    return {
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

<style scoped></style>
