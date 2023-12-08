<template>
  <div
    class="w-screen h-screen bg-main-3 bg-[length:100%_100%] text-white overflow-hidden"
  >
    <div class="w-full max-w-[100rem] mx-auto">
      <TheHeader />
      <TheMain>
        <div
          class="w- max-w-[75rem] h-full max-h-[40rem] mx-auto gradient border-[3px] border-solid uppercase text-center"
        >
          <h1 class="text-9xl leading-tight mt-60">Error 404!</h1>
          <p class="text-2xl">Page not found</p>
          <router-link to="/" class="text-2xl">Go to main page</router-link>
        </div>
      </TheMain>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheMain from "./TheMain.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
};
</script>

<style>
.gradient {
  background: linear-gradient(
    rgba(244, 244, 244, 0.4),
    rgba(244, 244, 244, 0.2)
  );
  border-color: linear-gradient(
    rgba(244, 244, 244, 0.6),
    rgba(244, 244, 244, 0.4)
  );
}
</style>