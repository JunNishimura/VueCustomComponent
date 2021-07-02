import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue';
import ModalPage from '@/views/ModalPage.vue';
import ImageUploaderPage from '@/views/ImageUploaderPage.vue';

const routes = [
    {
        path: '',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/modal',
        name: 'ModalPage',
        component: ModalPage
    },
    {
        path: '/imageUploader',
        name: 'ImageUploaderPage',
        component: ImageUploaderPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;