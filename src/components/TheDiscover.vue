<template>
  <div
    class="w-screen h-screen bg-main-1 bg-[length:100%_100%] bg-no-repeat text-white overflow-hidden"
  >
    <div class="w-full max-w-[100rem] mx-auto">
      <TheHeader />
      <TheMain path="contact">
        <TheDiscoverContent />
      </TheMain>
    </div>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheMain from "./TheMain.vue";
import TheDiscoverContent from "./TheDiscoverContent";
export default {
  components: {
    TheHeader,
    TheMain,
    TheDiscoverContent,
  },
};
</script>