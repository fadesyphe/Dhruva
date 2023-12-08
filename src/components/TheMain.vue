<template>
  <slot></slot>
  <div class="flex items-center justify-between">
    <TheSocial />
    <ScrollPage :path="path" />
  </div>
</template>

<script>
import TheSocial from "./TheSocial.vue";
import ScrollPage from "./ScrollPage.vue";
export default {
  components: {
    TheSocial,
    ScrollPage,
  },

  props: ["path"],
};
</script>