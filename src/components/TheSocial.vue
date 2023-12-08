<template>
  <div class="flex flex-col gap-y-8">
    <a href="#">
      <BaseIcon
        name="facebook"
        class="w-8 h-8 fill-white hover:fill-[#00A3FF] duration-700 ease-out"
      />
    </a>
    <a href="#">
      <BaseIcon
        class="w-[2.125rem] h-8 fill-white hover:fill-[#00A3FF] duration-700 ease-out"
        name="twitter"
        viewBox="0 0 34 28"
      />
    </a>
    <a href="#">
      <BaseIcon
        name="instagramm"
        class="w-8 h-8 fill-white hover:fill-[#00A3FF] duration-700 ease-out"
      />
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