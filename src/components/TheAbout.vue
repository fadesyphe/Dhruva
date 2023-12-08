<template>
  <div
    class="w-screen h-screen bg-main-3 bg-[length:100%_100%] text-white overflow-hidden"
  >
    <div class="w-full max-w-[100rem] mx-auto">
      <TheHeader />
      <TheMain>
        <TheAboutContent />
      </TheMain>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheMain from "./TheMain.vue";
import TheAboutContent from "./TheAboutContent.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheMain,
    TheAboutContent,
    TheFooter,
  },
};
</script>