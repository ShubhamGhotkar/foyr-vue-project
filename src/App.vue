<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
    <ReferCard v-if="this.$store.state.isCardShow"></ReferCard>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import ReferCard from "./components/ReferCard.vue";

export default {
  components: { TheHeader, ReferCard },
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: sans-serif;
}
body {
  overflow-x: hidden;
}

.main-btn {
  color: white;
  background-color: #3792a6;
  padding: 1.3rem 2.3rem;
  border-radius: 100px;
  font-size: 1.8rem;
  cursor: pointer;
  font-weight: 550;
  font-family: sans-serif;
}
.main-btn:hover {
  background-color: #4eaabf;
}

.center {
  width: 90vw;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: black;
}
a:hover,
a:visited,
a:active {
  font-weight: 600;
}

@media only screen and (max-width: 1064px) {
  html {
    font-size: 8px;
  }
}
@media only screen and (max-width: 380px) {
  html {
    font-size: 7px;
  }
}
</style>
