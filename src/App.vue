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
  /* width: 10rem; */
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
</style>
