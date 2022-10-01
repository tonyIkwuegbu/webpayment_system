<template>
  <header
    class="fixed top-0 left-0 right-0 z-10 mx-auto flex items-center justify-between p-2 bg-green-500"
  >
    <img
      loading="lazy"
      src="../assets/logo.jpg"
      alt="brand-logo"
      class="w-24 lg:w-36 object-contain cursor-pointer rounded-sm"
    />
    <h2
      class="font-cant text-sm md:text-2xl lg:4xl font-semibold tracking-wider text-white"
    >
      {{ headerTitle }}
    </h2>
    <div class="">
      <p>{{ icons }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "appHeader",

  data() {
    return {
      headerTitle: "PLASCHEMA Subscription Portal",
      icons: "icons",
    };
  },
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
