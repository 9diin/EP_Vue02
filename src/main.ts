import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index";
/** 스타일 */
import "./assets/styles/index.css";
import "./assets/styles/main.scss";

createApp(App).use(router).mount("#app");
