import { createRouter, createWebHistory } from "vue-router";

const routes = [

    { name: 'index', path: "/", component: () => import('../views/Vw-Index.vue') }

];

const router = createRouter({
    routes,
    linkActiveClass: "active",
    history: createWebHistory(),
});

export default router;