<template>
  <!-- News Item -->
  <div
    v-if="itemLoaded"
    class="
      absolute
      top-0
      left-0
      z-50
      w-screen
      h-screen
      overflow-y-auto overflow-x-hidden
      hide-scrollbar
      bg-background-default
      xl:hidden
    "
  >
    <div class="p-6 w-full relative">
      <button
        @click="closeItem()"
        class="
          text-white text-xl
          font-bold
          flex
          items-center
          relative
          right-6
          transition
          duration-300
          ease-in-out
          hover:text-primary-default
        "
      >
        <ion-icon size="large" name="chevron-back-outline"></ion-icon>Vorige
      </button>
      <h1
        class="
          absolute
          top-2
          left-2/4
          -ml-20
          text-2xl
          font-bold
          text-primary-default
          py-4
        "
      >
        Nieuwsbericht
      </h1>
    </div>
    <div>
      <img
        class="mt-2 w-full h-72 object-cover"
        :src="path + loadedItem.image_url"
      />
    </div>
    <div class="p-8 text-white">
      <h1 class="text-primary-default text-2xl font-medium mb-1">
        {{ loadedItem.title }}
      </h1>
      <h3 class="mb-1 text-base font-light capitalize">
        {{ dateTime(loadedItem.created_at) }}
      </h3>
      <h3 class="mb-3 text-base font-light text-gray-500">
        Laatst gewijzigd op {{ date(loadedItem.updated_at) }} om
        {{ time(loadedItem.updated_at) }}
      </h3>
      <p class="text-xl font-light">
        {{ loadedItem.description }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as moment from "moment";
import "moment/locale/nl-be";

export default {
  props: ["currentItem"],
  data() {
    return {
      path: "https://awv-fietsverbindingen.development.appwi.se",
      itemLoaded: false,
      loadedItem: null,
    };
  },
  mounted() {
    axios.get("https://awv-fietsverbindingen.development.appwi.se/api/news")
      .then((response) => {
        this.news = response.data;
      });
  },
  methods: {
    closeItem() {
      this.$emit("close-item");
    },
    dateTime(value) {
      return moment(value).format("dd DD/MM/YYYY - HH:mm");
    },
    date(value) {
      return moment(value).format("DD/MM/YYYY");
    },
    time(value) {
      return moment(value).format("HH:mm");
    },
  },
  watch: {
    currentItem: function (newVal) {
      this.loadedItem = newVal;
      this.itemLoaded = true;
    },
  },
};
</script>
