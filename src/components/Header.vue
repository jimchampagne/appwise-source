<template>
  <header
    class="
      header-bg
      p-4
      flex
      justify-between
      bg-background-default
      relative
      z-30
    "
  >
    <div class="flex flex-row justify-center items-center">
      <div class="mr-4 hidden xl:block">
        <img class="h-20 logo-color" src="../assets/icons/logo.svg" />
      </div>
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold text-primary-default mb-1">Bridges</h1>
        <h2 class="text-2xl font-bold text-white">London</h2>
      </div>
    </div>
    <div class="flex justify-center items-center xl:hidden">
      <button
        @click="toggleNews()"
        class="
          bg-secondary-default
          p-3
          rounded-full
          hover:bg-primary-default
          transition
          duration-300
        "
      >
        <img src="../assets/icons/icon_news.svg" class="h-8 w-8" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleNews() {
      this.$emit("toggle-news");
    },
  },
};
</script>