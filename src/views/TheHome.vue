<template>
  <section>
    <the-header></the-header>
    <the-referal-page></the-referal-page>
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheReferalPage from "@/components/TheReferalPage.vue";
export default {
  components: { TheHeader, TheReferalPage },
  comments: {
    TheHeader,
  },
};
</script>

<style scoped></style>
