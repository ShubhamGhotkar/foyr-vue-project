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
        <!-- media Query button -->
        <div class="responsive_btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="res-btn"
            @click="setShowNav"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div class="header--nav2" v-if="showNav">
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
    </the-container-vue>
  </header>
</template>

<script>
import TheContainerVue from "./TheContainer.vue";

export default {
  data() {
    return {
      showNav: false,
    };
  },
  components: {
    TheContainerVue,
  },

  methods: {
    setShowNav() {
      this.showNav = !this.showNav;
    },
  },
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
  z-index: 89898998;
}

.header_logo--logo {
  width: 100%;
}
.header--nav {
  margin-right: 2rem;
}

.responsive_btn {
  height: 3.4rem;
  width: 3.4rem;
  display: none;
}

.res-btn {
  height: 100%;
  width: 100%;
}

.header--nav2 {
  transition: all 3s ease-in;
  position: sticky;
  top: 0;
  left: 0;
}
.header--nav2 ul {
  width: 100vw;
  list-style: none;

  display: grid;
  place-items: center;
  gap: 3rem;

  background-color: white;
  padding: 3rem 0;
}

/* Media Query */
@media only screen and (max-width: 650px) {
  .responsive_btn {
    display: block;
  }
  .header_container ul {
    display: none;
  }
}
</style>
