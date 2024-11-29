import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index";
import "./assets/styles/index.css";

createApp(App).use(router).mount("#app");
