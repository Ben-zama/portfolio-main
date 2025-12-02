import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { Vue3Marquee } from "vue3-marquee";

createApp(App).use(Vue3Marquee, { name: "Marquee" }).mount("#app");