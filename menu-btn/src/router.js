import { createMemoryHistory, createRouter } from 'vue-router'

import File from './pages/File.vue'
import Web from './pages/Web.vue'

const routes = [
    { path: '/', component: File },
    { path: '/web', component: Web },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router