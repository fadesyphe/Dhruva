<template>
  <div
    class="w-full max-w-[100rem] mx-auto flex items-center justify-between py-12"
  >
    <a href="/">
      <BaseIcon
        name="logo"
        viewBox="0 0 228 73"
        class="w-[14.25rem] h-[4.5625rem]"
      />
    </a>
    <nav>
      <ol class="flex items-center gap-x-20">
        <li v-for="item in menu.slice(0, 3)" :key="item.name">
          <a
            href="#"
            class="text-2xl capitalize ease-out duration-700 hover:text-[#00A3FF]"
            >{{ item.name }}</a
          >
        </li>
        <li v-for="item in menu.slice(-1)" :key="item.name">
          <a
            href="#"
            class="text-2xl capitalize py-3 px-4 border-2 rounded-full border-white ease-out duration-700 hover:text-[#00A3FF] hover:border-[#00A3FF]"
            >{{ item.name }}</a
          >
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
export default {
  components: {
    BaseIcon,
  },

  data() {
    return {
      menu: [
        { name: "discover" },
        { name: "quiz" },
        { name: "about" },
        { name: "sign up" },
      ],
    };
  },
};
</script>