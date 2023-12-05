<template>
  <div class="w-screen h-screen bg-main-1 bg-cover text-white">
    <TheHeader />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>