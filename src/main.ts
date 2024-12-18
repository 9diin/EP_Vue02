import { createApp } from "vue";
import { createPinia } from "pinia"; // 추가된 코드
import App from "./App.vue";
import router from "./routes/index";
import { createNaverMap } from "vue3-naver-maps";

/** 스타일 */
import "./assets/styles/index.css";
import "./assets/styles/main.scss";

createApp(App)
    .use(router)
    .use(createPinia()) // 추가된 코드
    .use(createNaverMap, {
        clientId: "xweiyi8cv1", // 필수 입력 값
        category: "ncp", // 옵셔널 속성
        subModules: [], // 옵셔널 속성
    })
    .mount("#app");
