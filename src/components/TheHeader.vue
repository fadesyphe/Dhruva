<template>
  <div class="flex items-center justify-between py-12">
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