<template>
  <div
    class="
      absolute
      -bottom-2
      left-0
      z-10
      xl:hidden
      overflow-y-scroll
      hide-scrollbar
    "
  >
    <swiper
      :slides-per-view="1.1"
      :centeredSlides="true"
      :space-between="10"
      class="text-white"
    >
      <swiper-slide
        style="px-10"
        v-for="connection in connections"
        :key="connection.id"
      >
        <!-- ITEM -->
        <div
          @click="toggleActive($event)"
          class="bg-background-default rounded-xl content-box cursor-pointer"
        >
          <!-- Header Wrapper -->
          <div class="h-44">
            <div class="flex justify-between items-center">
              <div class="px-6">
                <h1 class="text-xl font-medium text-primary-default">
                  {{ connection.name }}
                </h1>
              </div>
              <div class="flex justify-center items-center">
                <!-- Warning Icon -->
                <svg
                  class="icon-width mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  width="22pt"
                  height="19pt"
                  viewBox="0 0 22 19"
                >
                  <g enable-background="new">
                    <clipPath id="cp0">
                      <path
                        transform="matrix(1,0,0,-1,0,19)"
                        d="M 21.85987 1.487097 L 11.8797 18.50283 C 11.48622 19.16572 10.53641 19.16572 10.14293 18.50283 L .1393763 1.487097 C -.2541061 .8241973 .2316427 .000467559 1.019524 .000467559 L 21.00417 .000467559 C 21.76763 -.02276045 22.25428 .8241973 21.85989 1.487097 L 21.85987 1.487097 Z M 10.07346 13.76871 C 10.07346 14.2717 10.49047 14.68356 10.99974 14.68356 C 11.509 14.68356 11.92601 14.2717 11.92601 13.76871 L 11.92601 7.250415 C 11.92601 6.747431 11.509 6.335566 10.99974 6.335566 C 10.49047 6.335566 10.07346 6.747431 10.07346 7.250415 L 10.07346 13.76871 Z M 10.99974 2.356432 C 10.2589 2.356432 9.656451 2.951449 9.656451 3.683145 C 9.656451 4.414841 10.2589 5.009859 10.99974 5.009859 C 11.74057 5.009859 12.34302 4.414841 12.34302 3.683145 C 12.34302 2.950557 11.74057 2.356432 10.99974 2.356432 Z "
                        fill-rule="evenodd"
                      />
                    </clipPath>
                    <g clip-path="url(#cp0)">
                      <clipPath id="cp1">
                        <path
                          transform="matrix(1,0,0,-1,0,19)"
                          d="M -1346 -618 L 94 -618 L 94 168 L -1346 168 Z "
                        />
                      </clipPath>
                      <g clip-path="url(#cp1)">
                        <path
                          transform="matrix(1,0,0,-1,0,19)"
                          d="M -5 24 L 27 24 L 27 -5 L -5 -5 Z "
                          fill="#F0BD56"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <!-- Info Icon -->
                <img
                  class="icon-width mr-2"
                  src="../assets/icons/icon_info.svg"
                />
                <button class="p-6 flex items-center">
                  <ion-icon
                    class="text-xl text-gray-500"
                    name="chevron-down-outline"
                  ></ion-icon>
                </button>
              </div>
            </div>
            <div class="px-6">
              <!-- Connection Ends -->
              <div>
                <!-- LIFTEN -->
                <div class="flex justify-between mb-4">
                  <div class="flex items-center">
                    <img
                      class="h-8 w-8 text-white mr-2"
                      src="../assets/icons/lift.svg"
                    />
                    <p class="text-lg">Liften</p>
                  </div>
                  <div
                    class="
                      flex
                      items-center
                      border border-gray-300
                      rounded-full
                      p-1
                    "
                  >
                    <!-- LinkerOever -->

                    <p class="text-base text-gray-400 px-1">Lo</p>
                    <span
                      v-if="
                        connection.connection_ends[0].services[0].state.id == 1
                      "
                      class="h-5 w-5 rounded-full bg-green-500 mx-1"
                    ></span>

                    <span
                      v-if="
                        connection.connection_ends[0].services[0].state.id == 2
                      "
                      class="h-5 w-5 rounded-full bg-yellow-700 mx-1"
                    >
                    </span>

                    <span
                      v-if="
                        connection.connection_ends[0].services[0].state.id == 3
                      "
                      class="h-5 w-5 rounded-full bg-yellow-700 mx-1"
                    >
                    </span>

                    <!-- RechterOever -->
                    <p class="text-base text-gray-400 px-1">Ro</p>
                    <span
                      v-if="
                        connection.connection_ends[1].services[0].state.id == 1
                      "
                      class="h-5 w-5 rounded-full bg-green-500 mx-1"
                    ></span>
                    <span
                      v-if="
                        connection.connection_ends[1].services[0].state.id === 2
                      "
                      class="h-5 w-5 rounded-full bg-yellow-700 mx-1"
                    ></span>
                    <span
                      v-if="
                        connection.connection_ends[1].services[0].state.id === 3
                      "
                      class="h-5 w-5 rounded-full bg-yellow-700 mx-1"
                    ></span>
                  </div>
                </div>

                <!-- ROLTRAPPEN -->
                <div
                  v-if="
                    connection.connection_ends[0].services[1] &&
                    connection.connection_ends[1].services[1]
                  "
                  class="flex justify-between mb-4"
                >
                  <div class="flex items-center">
                    <img
                      class="h-8 w-8 text-white mr-2"
                      src="../assets/icons/stairs.svg"
                    />
                    <p class="text-lg">Roltrappen</p>
                  </div>
                  <div
                    class="
                      flex
                      items-center
                      border border-gray-300
                      rounded-full
                      p-1
                    "
                  >
                    <!-- LinkerOever -->
                    <p class="text-base text-gray-400 px-1">Lo</p>

                    <span
                      v-if="
                        connection.connection_ends[0].services[1].state.id === 1
                      "
                      class="h-5 w-5 rounded-full bg-green-500 mx-1"
                    ></span>

                    <span
                      v-if="
                        connection.connection_ends[0].services[1].state.id === 2
                      "
                      class="h-5 w-5 rounded-full bg-yellow-700 mx-1"
                    ></span>

                    <span
                      v-if="
                        connection.connection_ends[0].services[1].state.id === 3
                      "
                      class="h-5 w-5 rounded-full bg-yellow-700 mx-1"
                    ></span>

                    <!-- RechterOever -->
                    <p class="text-base text-gray-400 px-1">Ro</p>

                    <span
                      v-if="
                        connection.connection_ends[1].services[1].state.id === 1
                      "
                      class="h-5 w-5 rounded-full bg-green-500 mx-1"
                    ></span>

                    <span
                      v-if="
                        connection.connection_ends[1].services[1].state.id === 2
                      "
                      class="h-5 w-5 rounded-full bg-yellow-700 mx-1"
                    ></span>

                    <span
                      v-if="
                        connection.connection_ends[1].services[1].state.id === 3
                      "
                      class="h-5 w-5 rounded-full bg-yellow-700 mx-1"
                    ></span>
                  </div>
                </div>
                <!-- ELSE -->
                <div v-else class="flex justify-between mb-4">
                  <div class="flex items-center">
                    <img
                      class="h-8 w-8 text-white mr-2"
                      src="../assets/icons/stairs.svg"
                    />
                    <p class="text-lg">Roltrappen</p>
                  </div>
                  <div
                    class="
                      flex
                      items-center
                      border border-gray-300
                      rounded-full
                      p-1
                    "
                  >
                    <p class="text-sm text-gray-400 px-1">Niet beschikbaar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- ItemContent -->
          <div
            style="overflow: scroll; overflow-x: hidden"
            class="inner-content-mobile px-6"
          >
            <!-- Algemene Info -->
            <div class="flex mb-1">
              <div class="pr-3 pt-1">
                <img
                  class="icon-width"
                  src="../assets/icons/icon_warning.svg"
                />
              </div>
              <div v-if="connection.current_info">
                <h2 class="text-lg font-medium mb-1">Algemeen</h2>
                <p class="font-light">
                  {{ connection.current_info }}
                </p>
              </div>
            </div>
            <!-- Services LO -->
            <div
              v-for="service in connection.connection_ends[0].services"
              :key="service.id"
            >
              <div v-if="service.current_info.length > 0" class="flex mb-1">
                <div class="pr-3 pt-1">
                  <img
                    v-if="service.state.id == 1"
                    class="icon-width"
                    src="../assets/icons/icon_info.svg"
                  />
                  <img
                    v-if="service.state.id == 2"
                    class="icon-width"
                    src="../assets/icons/icon_warning.svg"
                  />
                  <img
                    v-if="service.state.id == 3"
                    class="icon-width"
                    src="../assets/icons/icon_warning.svg"
                  />
                </div>
                <div>
                  <h2 class="text-lg font-medium mb-1">
                    {{ service.title }}
                    <!-- {{ service.type.name }} Linkeroever -->
                  </h2>
                  <p class="font-light">
                    {{ service.current_info }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Services RO -->

            <div
              v-for="service in connection.connection_ends[1].services"
              :key="service.id"
            >
              <div v-if="service.current_info.length > 0" class="flex mb-2">
                <div class="pr-3 pt-1">
                  <img
                    v-if="service.state.id == 1"
                    class="icon-width"
                    src="../assets/icons/icon_info.svg"
                  />
                  <img
                    v-if="service.state.id == 2"
                    class="icon-width"
                    src="../assets/icons/icon_warning.svg"
                  />
                  <img
                    v-if="service.state.id == 3"
                    class="icon-width"
                    src="../assets/icons/icon_warning.svg"
                  />
                </div>
                <div>
                  <h2 class="text-lg font-medium mb-1">
                    {{ service.title }}
                    <!-- {{ service.type.name }} Linkeroever -->
                  </h2>
                  <p class="font-light">
                    {{ service.current_info }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Toegankelijkheid -->
            <div class="pb-8">
              <h3 class="text-lg font-medium mb-2">Toegankelijkheid</h3>
              <div class="flex items-end">
                <img
                  v-if="connection.accessibility[0].possible == 1"
                  class="icon-width-acc mr-2"
                  src="../assets/icons/acc_walk.svg"
                />

                <img
                  v-if="connection.accessibility[1].possible == 1"
                  class="icon-width-acc mr-2"
                  src="../assets/icons/acc_weelchair.svg"
                />

                <img
                  v-if="connection.accessibility[2].possible == 1"
                  class="icon-width-acc mr-2"
                  src="../assets/icons/acc_bike.svg"
                />

                <img
                  v-if="connection.accessibility[3].possible == 1"
                  class="icon-width-acc mr-2"
                  src="../assets/icons/acc_bakfiets.svg"
                />

                <img
                  v-if="connection.accessibility[4].possible == 1"
                  class="icon-width-acc mr-2"
                  src="../assets/icons/acc_scooter.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: ["connections", "states"],
  data() {
    return {
      isActive: false,
      newConnections: null,
      options: {
        perPage: 1,
        autoWidth: true,
        padding: "1em",
      },
    };
  },
  methods: {
    toggleActive(e) {
      let contentbox = document.getElementsByClassName("content-box");
      for (let i = 0; i < contentbox.length; i++) {
        contentbox[i].classList.toggle("active");
      }
    },
  },
};
</script>