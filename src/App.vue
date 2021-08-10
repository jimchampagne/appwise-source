<template>
  <div class="font-flanders overflow-x-hidden hide-scrollbar">
    <!-- Header -->
    <Header v-on:toggle-news="toggleNews" />
    <!-- Map -->
    <Map :markers="markers" :connections="connections" :polylines="polylines" />
    <!-- Info Accordion Mobile -->
    <InfoAccordionMobile :connections="connections" />
    <!-- Info Accordion Desktop -->
    <InfoAccordionDesktop :connections="connections" />
    <!-- Mobile News -->
    <NewsMobile
      :news="news"
      v-on:toggle-news="toggleNews"
      v-on:load-item="loadItem($event)"
      :class="newsOpen ? 'onscreen' : 'offscreen'"
    />
    <NewsMobileItem
      :currentItem="currentItem"
      :class="itemOpen ? 'news-item-open-m' : 'news-item-closed-m'"
      v-on:close-item="closeItem"
    />
    <!-- Desktop News -->
    <NewsDesktop :news="news" />
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header";
import Map from "@/components/Map";
import InfoAccordionMobile from "@/components/InfoAccordionMobile";
import InfoAccordionDesktop from "@/components/InfoAccordionDesktop";
import NewsMobile from "@/components/NewsMobile";
import NewsMobileItem from "@/components/NewsMobileItem";
import NewsDesktop from "@/components/NewsDesktop";

export default {
  components: {
    Header,
    Map,
    InfoAccordionMobile,
    InfoAccordionDesktop,
    NewsMobile,
    NewsMobileItem,
    NewsDesktop,
  },
  data() {
    return {
      connections: [],
      markers: [],
      polylines: [],
      states: null,
      newsOpen: false,
      news: [],
      itemOpen: false,
      currentItem: null,
    };
  },
  methods: {
    toggleNews() {
      this.newsOpen = !this.newsOpen;
    },
    loadItem(id) {
      let itemArray = this.news.filter((newsItem) => newsItem.id === id);
      this.currentItem = itemArray[0];
      this.itemOpen = true;
    },
    closeItem() {
      this.itemOpen = false;
    },
  },
  mounted() {
    // GET CONNECTIONS/MARKERS/POLYLINES FROM API
    axios.get("https://awv-fietsverbindingen.development.appwi.se/api/connections")
      .then((response) => {
        // ALL CONNECTIONS
        this.connections = response.data;
        // ALL MARKERS
        this.markers = this.connections.map((connection) => {
          let marker = {
            name: connection.name,
            position: { lat: connection.lat, lng: connection.long },
          };
          return marker;
        });
        // ALL POLYLINES
        this.polylines = this.connections.forEach((connection) => {
          let connectionEnds = connection.connection_ends;
          let polyLine = [];
          connectionEnds.forEach((end) => {
            let coordinates = { lat: end.lat, lng: end.long };
            polyLine.push(coordinates);
          });
          this.polylines.push(polyLine);
        });
      });

    // GET NEWS FROM API
    axios.get("https://awv-fietsverbindingen.development.appwi.se/api/news")
      .then((response) => {
        this.news = response.data;
      });
  },
};
</script>
