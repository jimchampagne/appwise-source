<template>
  <div>
    <GMapMap
      class="w-screen h-screen absolute top-0 left-0 z-0"
      :center="center"
      :zoom="16"
      :options="options"
    >
      <GMapPolyline
        :options="polylineOptions"
        v-for="(path, index) in lines"
        :key="index"
        ref="polyline"
        :path="path"
      />
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          @click="center = m.position"
        >
          <GMapInfoWindow
            :options="{
              pixelOffset: {
                width: -5,
                height: 60,
              },
            }"
          >
            <div class="bg-primary-default px-6 cursor-pointer">
              <h2 class="text-white text-2xl font-bold">{{ m.name }}</h2>
            </div>
          </GMapInfoWindow>
        </GMapMarker>
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script>
export default {
  props: ["markers", "connections", "polylines"],
  data() {
    return {
      lines: null,
      center: { lat: 51.50981, lng: -0.101225 },
      options: {
        mapId: "a11cbc48979342d8",
        disableDefaultUI: true,
      },
      polylineOptions: {
        strokeColor: "#51C5FC",
        strokeWeight: 8,
      },
    };
  },
  beforeMount() {
    this.lines = this.polylines;
  }
};
</script>