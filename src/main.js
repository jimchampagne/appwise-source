import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import './assets/tailwind.css'
import './assets/style.css'
import 'swiper/swiper-bundle.css'

createApp(App)
  .use(VueAxios, axios)
  .use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDVZ8Y8m-P0-n6BvYGNelurEPZrp0c08pY',
      map_id:'a11cbc48979342d8'
    },
  })
  .mount('#app')
