<template>
  <div
    class="w-full max-w-[100rem] mx-auto flex items-center justify-between py-12"
  >
    <TheLogo />
    <TheMenu />
  </div>
</template>

<script>
import TheLogo from "./TheLogo.vue";
import TheMenu from "./TheMenu.vue";
export default {
  components: {
    TheLogo,
    TheMenu,
  },
};
</script>