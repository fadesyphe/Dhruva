<template>
  <div class="w-screen h-screen bg-main-1 bg-cover text-white">
    <div class="w-full max-w-[100rem] mx-auto">
      <TheHeader />
      <TheMain />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheMain,
  },
};
</script>