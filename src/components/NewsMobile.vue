<template>

    <div class="
        w-screen
        h-screen
        overflow-y-auto overflow-x-hidden
        hide-scrollbar 
        bg-background-default
        absolute
        top-0
        left-0
        z-40
        xl:hidden
      ">
      <div class="p-6">
        <button
          @click="toggleNews()"
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
        <h1 class="text-4xl font-bold text-primary-default py-4">
          Nieuwsberichten
        </h1>
      </div>
      <div v-if="newsLoaded">
        <div v-for="message in loadedNews" :key="message.id">
          <div
            @click="loadItem(message.id, $event)"
            class="text-white relative flex p-6"
          >
            <span
              class="
                h-44
                w-2
                absolute
                -left-1
                top-2
                bottom-0
                bg-white
                rounded-xl
                watched
              "
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
          </div>
          <hr class="border border-gray-400 w-full ml-6" />
        </div>
      </div>
    </div>
</template>

<script>
import * as moment from "moment";
import "moment/locale/nl-be";

export default {
  props: ['news'],
  data() {
    return {
      loadedNews: null,
      newsLoaded: false,
      path: "https://awv-fietsverbindingen.development.appwi.se",
    };
  },
  methods: {
    toggleNews() {
      this.$emit("toggle-news");
    },
    loadItem(id, e) {
      e.currentTarget.querySelector('.watched').classList.remove('bg-white');
      e.currentTarget.querySelector('.watched').classList.add('bg-primary-default');
      this.$emit("load-item", id);
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
    news: function(newVal) {
      this.loadedNews = newVal;
      this.newsLoaded = true;
    }
  }
};
</script>
