<template>
  <div id="app">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader/TheHeader.vue";
export default {
  components: {
    TheHeader
  }
};
</script>


<style lang="scss">
:root {
  --header-height: 80px;
}
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
