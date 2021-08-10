<template>
  <div
    class="
      absolute
      top-0
      right-0
      pt-28
      z-10
      hidden
      xl:block
      h-screen
      overflow-y-scroll
      hide-scrollbar
    "
  >
    <div class="text-white p-6">
      <div v-for="connection in connections" :key="connection.id">
        <!-- ITEM -->
        <div
          @click="toggleActive($event)"
          class="
            bg-background-default
            rounded-xl
            drawer-width
            mb-4
            content-box
            cursor-pointer
          "
        >
          <!-- Header Wrapper -->
          <div class="flex justify-between items-center">
            <div class="px-6">
              <h1 class="text-2xl font-medium watcher-acc text-primary-default">
                {{ connection.name }}
              </h1>
            </div>
            <div class="flex justify-center items-center">
              <!-- Warning Icon -->
              
              <!-- Info Icon -->
              <img
                class="icon-width mr-2"
                src="../assets/icons/icon_info.svg"
              />

              <button class="p-6 flex items-center">
                <ion-icon
                  class="text-2xl text-gray-500"
                  name="chevron-down-outline"
                ></ion-icon>
              </button>
            </div>
          </div>
          <!-- ItemContent -->
          <div class="inner-content px-6">
            <!-- Connection Ends -->
            <div>
              <!-- LIFTEN -->
              <div class="flex justify-between mb-3">
                <div class="flex items-center">
                  <img
                    class="h-8 w-8 text-white mr-2"
                    src="../assets/icons/lift.svg"
                  />
                  <p class="text-xl">Liften</p>
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
                class="flex justify-between mb-3"
              >
                <div class="flex items-center">
                  <img
                    class="h-8 w-8 text-white mr-2"
                    src="../assets/icons/stairs.svg"
                  />
                  <p class="text-xl">Roltrappen</p>
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
            </div>

            <!-- Algemene Info -->
            <div class="flex mb-5 mt-8">
              <div class="pr-3 pt-1">
                <img
                  class="icon-width"
                  src="../assets/icons/icon_warning.svg"
                />
              </div>
              <div v-if="connection.current_info">
                <h2 class="text-xl font-medium mb-3">Algemeen</h2>
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
              <div v-if="service.current_info.length > 0" class="flex mb-5">
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
                  <h2 class="text-xl font-medium mb-3">
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
              <div v-if="service.current_info.length > 0" class="flex mb-5">
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
                  <h2 class="text-xl font-medium mb-3">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["connections", "states"],
  data() {
    return {
      isActive: false,
      newConnections: null,
    };
  },
  methods: {
    toggleActive(e) {
      let items = document.getElementsByClassName('watcher-acc');
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('text-yellow-700');
        items[i].classList.add('text-primary-default');
      }
      e.currentTarget.classList.toggle("active");
      let title = e.currentTarget.querySelector('.watcher-acc');
      title.classList.remove('text-primary-default');
      title.classList.add('text-yellow-700');
    },
  },
};
</script>
