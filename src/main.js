import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import 'animate.css'
// import "@/assets/js/wow.min.js";
import 'owl.carousel/dist/owl.carousel.min'
// import "@/assets/js/homepage.js";
// import "@/assets/js/about.js";
createApp(App).use(store).use(router).mount('#app')
