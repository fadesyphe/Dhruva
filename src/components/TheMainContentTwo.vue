<template>
  <div class="flex justify-between items-center">
    <div v-for="(item, id) in list" :key="id" class="text-center">
      <div class="bg-[#d9d9d9] w-[400px] h-[400px] inline-block"></div>
      <h4 class="mt-7 text-2xl">{{ item }}</h4>
      <p class="mt-3 text-xl">Image description</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["Instagramm Post", "Location", "Instagramm Post"],
    };
  },
};
</script>