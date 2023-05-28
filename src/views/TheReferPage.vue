<template>
  <section class="refer_container">
    <the-header></the-header>
    <main>
      <refer-card class="card"></refer-card>
    </main>
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import ReferCard from "@/components/TheReferCard.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: { TheHeader, ReferCard },
};
</script>

<style scoped>
main {
  width: 100vw;
  min-height: 90vh;
  backface-visibility: visible;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
