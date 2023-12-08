<template>
  <div class="w-screen h-screen bg-main-2 bg-cover text-white overflow-hidden">
    <div class="w-full max-w-[100rem] mx-auto">
      <TheHeader />
      <TheMain path="three">
        <TheMainContentTwo />
      </TheMain>
    </div>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheMain from "./TheMain.vue";
import TheMainContentTwo from "./TheMainContentTwo.vue";

export default {
  components: {
    TheHeader,
    TheMain,
    TheMainContentTwo,
  },
};
</script>