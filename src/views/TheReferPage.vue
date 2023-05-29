<template>
  <section class="refer_container">
    <the-header></the-header>
    <span :class="setBackground">
      <refer-card @show-emit="handleEmit"></refer-card>
    </span>
  </section>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import ReferCard from "@/components/TheReferCard.vue";
export default {
  data() {
    return {
      cardShow: true,
    };
  },
  methods: {
    handleEmit(data) {
      this.cardShow = data;
    },
  },
  components: { TheHeader, ReferCard },

  computed: {
    setBackground() {
      return this.cardShow === true
        ? `card_container visible`
        : `card_container`;
    },
  },
};
</script>

<style scoped>
.card_container {
  width: 100vw;
  min-height: 90vh;
  backface-visibility: visible;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
}

.visible {
  background-color: rgba(0, 0, 0, 0.3) !important;
}
</style>
