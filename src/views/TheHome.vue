<template>
  <section class="home-section">
    <!-- The main Home Page Referal Div Render here -->
    <referal-page></referal-page>
  </section>
</template>

<script>
import ReferalPage from "@/components/ReferalPage.vue";
export default {
  components: { ReferalPage },
};
</script>

<style scoped>
.home-section {
  margin-top: 9rem;
  background: white;
}
</style>
