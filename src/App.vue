<template>
  <router-view></router-view>
</template>

<script>
export default {};
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

.ref-btn {
  color: white;
  background-color: #3792a6;
  padding: 1.3rem 2.3rem;
  border-radius: 100px;
  font-size: 1.8rem;

  font-weight: 550;
  font-family: sans-serif;
}
.ref-btn:hover {
  cursor: pointer;
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
