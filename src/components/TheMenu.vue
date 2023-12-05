<template>
  <nav>
    <ol class="flex items-center gap-x-20">
      <MenuItem
        v-for="item in menu"
        :key="item.name"
        :name="item.name"
        :login="item.login"
      />
    </ol>
  </nav>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  components: {
    MenuItem,
  },

  data() {
    return {
      menu: [
        { name: "discover" },
        { name: "quiz" },
        { name: "about" },
        { name: "sign up", login: true },
      ],
    };
  },
};
</script>