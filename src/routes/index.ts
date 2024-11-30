import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeView from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [{ path: "/", component: HomeView }];
const router = createRouter({ history: createWebHistory(), routes });

export default router;
