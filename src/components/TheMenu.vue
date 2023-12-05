<template>
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
</template>

<script>
export default {
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