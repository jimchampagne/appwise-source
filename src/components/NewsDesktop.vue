<template>
  <!-- NEWSFEED -->
  <div
    v-if="newsLoaded"
    class="
      news-width
      h-screen
      overflow-y-scroll overflow-x-hidden
      hide-scrollbar
      bg-background-default
      pt-28
      hidden
      xl:block
      absolute
      top-0
      left-0
      z-20
    "
  >
    <div v-for="message in loadedNews" :key="message.id">
      <div @click="loadItem(message.id, $event)" class="text-white relative flex p-6">
        <span
          class="h-44 w-2 absolute -left-1 top-2 bottom-0 bg-primary-default rounded-xl watcher hidden"
        >
        </span>
        <div>
          <img class="thumbnail" :src="path + message.image_url" />
        </div>
        <div class="px-5">
          <h1 class="text-primary-default text-2xl font-medium mb-1">
            {{ message.title }}
          </h1>
          <h3 class="mb-3 text-base font-light capitalize">
            {{ dateTime(message.created_at) }}
          </h3>
          <p class="text-xl font-light">
            {{ message.description.substring(0, 60) }}
          </p>
        </div>
        <button class="absolute right-0 top-0 bottom-0">
          <div class="p-4">
            <ion-icon
              class="text-primary-default"
              size="large"
              name="chevron-forward-outline"
            ></ion-icon>
          </div>
        </button>
      </div>
      <hr class="border border-gray-400 w-full ml-6" />
    </div>
  </div>

  <!-- NEWS ITEM -->
  <div
    :class="itemOpen ? 'news-item-open' : 'news-item-closed'"
    class="
      absolute
      top-0
      left-0
      pt-28
      z-10
      news-width
      bg-background-default
      h-screen
      overflow-y-scroll overflow-x-hidden
      hide-scrollbar
      hidden
      xl:block
    "
  >
    <div class="relative text-white" v-if="itemLoaded">
      <button @click="closeItem" class="absolute top-0 right-0 p-6">
        <ion-icon size="large" name="close"></ion-icon>
      </button>
      <img
        class="w-full h-72 object-cover"
        :src="path + currentItem.image_url"
      />
      <div class="p-8">
        <h1 class="text-primary-default text-2xl font-medium mb-1">
          {{ currentItem.title }}
        </h1>
        <h3 class="mb-1 text-base font-light capitalize">
          {{ dateTime(currentItem.created_at) }}
        </h3>
        <h3 class="mb-3 text-base font-light text-gray-500">
          Laatst gewijzigd op {{ date(currentItem.updated_at) }} om
          {{ time(currentItem.updated_at) }}
        </h3>
        <p class="text-xl font-light">
          {{ currentItem.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import * as moment from "moment";
import "moment/locale/nl-be";

export default {
  props: ['news'],
  data() {
    return {
      path: "https://awv-fietsverbindingen.development.appwi.se",
      itemOpen: false,
      currentItem: null,
      itemLoaded: false,
      loadedNews: null,
      newsLoaded:false,
    };
  },
  methods: {
    dateTime(value) {
      return moment(value).format("dd DD/MM/YYYY - HH:mm");
    },
    date(value) {
      return moment(value).format("DD/MM/YYYY");
    },
    time(value) {
      return moment(value).format("HH:mm");
    },
    openItem() {
      this.itemOpen = true;
    },
    closeItem() {
      this.itemOpen = false;
    },
    loadItem(id ,e) {
      let items = document.getElementsByClassName('watcher');
      for (let i = 0; i < items.length; i++) {
        items[i].classList.add('hidden');
      }
      e.currentTarget.querySelector('.watcher').classList.remove('hidden');
      this.openItem();
      let itemArray = this.news.filter((newsItem) => newsItem.id === id);
      this.currentItem = itemArray[0];
      this.itemLoaded = true;
    },
  },
  watch: {
    news: function (newVal) {
      this.loadedNews = newVal;
      this.newsLoaded = true;
    }
  }
};
</script>
