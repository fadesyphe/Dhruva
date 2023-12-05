<template>
  <div class="font-black text-sm tracking-[0.4em] mt-28">
    <a
      href="#"
      class="flex flex-col items-center justify-center gap-y-10 duration-700 ease-out hover:text-[#00A3FF] hover:fill-[#00A3FF]"
    >
      <span class="rotate-90 inline-block">Scroll</span>
      <BaseIcon name="arrow" class="w-2 h-[3.25rem]" viewBox="0 0 8 52" />
    </a>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },
};
</script>