import { createApp } from "vue";
import Toast from "vue-toastification";

import "@fontsource/poppins/100.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";

import App from "@/App.vue";
import router from "@/router";

import "@/assets/main.css";
import "@/assets/swal.css";
import "@/assets/vue-multiselect.css";
import "vue-toastification/dist/index.css";
import "tippy.js/dist/tippy.css";

const app = createApp(App);

app.use(router);
app.use(Toast);
app.mount("#app");
