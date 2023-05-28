<template>
  <section class="faq_section">
    <the-container>
      <h2 class="faqs_header">Frequently Asked Questions</h2>
      <div
        class="carousel_container"
        v-for="(data, index) in Datas"
        :key="index"
      >
        <div class="question">
          <span>
            <h3 class="carousel_tittle">{{ data.tittle }}</h3>
            <span v-if="itemsShow[index]">
              <p class="carousel_para">{{ data.description }}</p>
            </span>
          </span>

          <div class="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="btn show-info"
              @click="setShow(index)"
              v-if="!itemsShow[index]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="btn hide-info"
              @click="setShow(index)"
              v-if="itemsShow[index]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </the-container>
  </section>
</template>

<script>
import TheContainer from "./TheContainer.vue";

export default {
  props: ["Datas"],
  components: { TheContainer },
  data() {
    return {
      itemsShow: [],
    };
  },

  methods: {
    setShow(index) {
      this.$set(this.itemsShow, index, !this.itemsShow[index]);
    },
  },
};
</script>

<style scoped>
.faq_section {
  /* margin-top: 10rem; */
  min-height: 100vh;
  background-color: whitesmoke;
}
.btn {
  height: 2.4rem;
  width: 2.4rem;
}
.carousel_container {
  transition: all 1s ease-in-out;
}

.faqs_header {
  font-size: 3.2rem;
  padding: 9rem 0 4rem 0;
}
.question {
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 1rem;

  padding: 2rem;
  margin: 3rem 0 0 1rem;
}

.carousel_tittle {
  font-size: 2.2rem;
}
.carousel_para {
  font-size: 1.7rem;
  line-height: 1.5;
  padding: 1rem 3rem 1rem 0;
}
</style>
