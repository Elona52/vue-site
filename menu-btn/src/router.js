import { createMemoryHistory, createRouter } from 'vue-router'

// 페이지 컴포넌트들 import
import File from './pages/File.vue'
import Web from './pages/Web.vue'

// views 컴포넌트들 import
import Folder_ro from './views/Folder_ro.vue'
import Folder_site from './views/Folder_site.vue'

// component2 컴포넌트들 import
import A1 from './component2/A1.vue'
import B1_ from './component2/B1_.vue'
import SiteA from './component2/SiteA.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: File
    },
    {
        path: '/file',
        name: 'File',
        component: File
    },
    {
        path: '/web',
        name: 'Web',
        component: Web
    },
    {
        path: '/folder-ro',
        name: 'Folder_ro',
        component: Folder_ro
    },
    {
        path: '/folder-site',
        name: 'Folder_site',
        component: Folder_site
    },
    {
        path: '/a1',
        name: 'A1',
        component: A1
    },
    {
        path: '/b1',
        name: 'B1_',
        component: B1_
    },
    {
        path: '/site-a',
        name: 'SiteA',
        component: SiteA
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router