import { createApp } from "vue";
import { createMetaManager } from "vue-meta";
import { plugin as vueMetaPlugin } from "vue-meta";
import { createPinia } from "pinia";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";

const app = createApp(App);
app.use(vueMetaPlugin);
app.use(createMetaManager());
app.use(createPinia());
app.use(router);

app.mount("#app");
