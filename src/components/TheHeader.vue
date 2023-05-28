<template>
  <header>
    <the-container-vue>
      <div class="header_container">
        <div class="header_logo">
          <img
            src="../assets/logos.png"
            alt="logo.png"
            class="header_logo--logo"
          />
        </div>
        <div class="header--nav">
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/reward">Rewards</router-link></li>
            <li>
              <router-link to="/track-progress">Track Progress</router-link>
            </li>
            <li><router-link to="/faqs">FAQs</router-link></li>
            <li>
              <router-link to="/refer-to-friend" class="ref-btn"
                >Refer Now</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </the-container-vue>
  </header>
</template>

<script>
import TheContainerVue from "./TheContainer.vue";

export default {
  data() {
    return {};
  },
  components: {
    TheContainerVue,
  },

  methods: {},
};
</script>

<style scoped>
header {
  width: 100vw;
  height: 7.2rem;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  background-color: white;

  position: sticky;
  top: 0;
  left: 0;
}

.header_container {
  height: 7.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header_container ul {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 4rem;

  list-style: none;
}

li {
  font-size: 1.8rem;
}
.header_logo {
  width: 10rem;
  height: 5rem;

  display: grid;
  place-items: center;
}

.header_logo--logo {
  width: 100%;
}
.header--nav {
  margin-right: 2rem;
}
</style>
