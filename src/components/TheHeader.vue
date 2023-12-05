<template>
  <div
    class="w-full max-w-[100rem] mx-auto flex items-center justify-between py-12"
  >
    <TheLogo />
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
import TheLogo from "./TheLogo.vue";
export default {
  components: {
    TheLogo,
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