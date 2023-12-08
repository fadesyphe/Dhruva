<template>
  <div class="font-black text-sm tracking-[0.4em] mt-28">
    <router-link :to="`/${path}`" :class="classes">
      <span class="rotate-90 inline-block">Scroll</span>
      <BaseIcon name="arrow" class="w-2 h-[3.25rem]" viewBox="0 0 8 52" />
    </router-link>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },

  props: ["path"],

  computed: {
    classes() {
      return [
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        "gap-y-10",
        "duration-700",
        "ease-out",
        "hover:text-[#00A3FF]",
        "fill-white",
        "hover:fill-[#00A3FF]",
      ];
    },
  },
};
</script>