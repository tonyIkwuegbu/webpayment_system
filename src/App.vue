<template>
  <div class="">
    <Header />
    <div
      class="mt-20 absolute flex flex-col items-center justify-around lg:flex lg:flex-row inset-0 mx-auto overflow-y-scroll"
    >
      <Home />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: { Header, Home },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
