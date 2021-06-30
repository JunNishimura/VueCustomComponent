import { createRouter, createWebHistory } from 'vue-router'

import ModalPage from '@/views/ModalPage.vue';

const routes = [
    {
        path: '/modal',
        name: 'ModalPage',
        component: ModalPage
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
