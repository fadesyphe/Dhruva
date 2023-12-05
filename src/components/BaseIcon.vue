<template>
  <svg
    :class="$attrs.class || 'w-7 h-7'"
    :viewBox="$attrs.viewBox || '0 0 28 28'"
    v-html="path"
  ></svg>
</template>

<script>
import icons from "../icons.js";
export default {
  data() {
    return {
      path: icons[this.name],
    };
  },

  props: ["name"],
};
</script>