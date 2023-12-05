<template>
  <li>
    <a href="#" :class="classes">{{ this.name }}</a>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    login: Boolean,
  },

  computed: {
    classes() {
      return [
        "text-2xl",
        "capitalize",
        "ease-out",
        "duration-700",
        "hover:text-[#00A3FF]",
        this.login == true
          ? "py-3 px-4 border-2 rounded-full border-white hover:border-[#00A3FF]"
          : "",
      ];
    },
  },
};
</script>