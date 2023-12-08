<template>
  <div
    class="w-screen h-screen bg-main-2 bg-[length:100%_100%] text-white overflow-hidden"
  >
    <div class="w-full max-w-[100rem] mx-auto">
      <TheHeader />
      <TheMain path="about">
        <TheContactContent />
      </TheMain>
    </div>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheMain from "./TheMain.vue";
import TheContactContent from "./TheContactContent.vue";

export default {
  components: {
    TheHeader,
    TheMain,
    TheContactContent,
  },
};
</script>