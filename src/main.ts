import { createApp } from "vue";

import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css';

import "@fontsource/poppins/100.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";

import App from "@/App.vue";
import router from "@/router";

import "@/assets/main.css";

const app = createApp(App);

app.use(router);
app.use(VueTippy, { component: "Tippy" });
app.mount("#app");
