import { RouterView, createRouter, createWebHashHistory } from 'vue-router'
import { h } from 'vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: () => import('./components/home.vue') },
        {
            path: '/popsci',
            component: () => import('./components/popsci.vue'),
            redirect: '/popsci/information',
            children: [
                {
                    path: 'information',
                    component: { render: () => h(RouterView) },
                    children: [
                        {
                            path: '',
                            component: () => import('./components/POPSCI/information.vue')
                        },
                        {
                            path: ':id',
                            name: 'details',
                            component: () => import('./components/POPSCI/infDetail.vue'), props: true
                        }
                    ]
                },
                {
                    path: 'directory',
                    component: () => import('./components/POPSCI/directory.vue')
                },

            ]
        },

        {
            path: '/links',
            component: () => import('./components/AboutLinks.vue'),
            redirect: '/links/about1',
            children: [
                {
                    path: 'about1',
                    component: () => import('./components/links/about1.vue')
                },
                {
                    path: 'about2',
                    component: () => import('./components/links/about2.vue')
                },

            ]
        },

        { path: '/PD', component: () => import('./components/ProjectDynamics.vue') },
        { path: '/PI', component: () => import('./components/ProjectIntroduction.vue') },
        { path: '/PR', component: () => import('./components/PolicieRegulation.vue') },
        { path: '/TW', component: () => import('./components/TenderWebsite.vue') },
        { path: '/ID', component: () => import('./components/IndustryDynamics.vue') },
        { path: '/TC', component: () => import('./components/TrainingCourse.vue') },
    ]
})

export default router