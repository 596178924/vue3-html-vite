// 布局
import Layout from '@/layout/index.vue';

export default [
    {
        path: '/',
        name: 'Root',
        component: Layout,
        redirect: '/index',
        meta: {
            title: '首页',
            icon: 'ri-home-2-line',
            breadcrumbHidden: true,
        },
        children: [
            {
                path: '/index',
                name: 'index',
                component: () => import('@/views/homepage/index.vue'),
                meta: {
                    title: '主页',
                    icon: 'ri-home-2-line',
                    noClosable: true, //tabs中 不被清除
                },
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                meta: {
                    title: '看板',
                    icon: 'ri-dashboard-3-line',
                },
            },
            {
                path: '/aboutMe',
                name: 'aboutMe',
                component: () => import('@/views/aboutMe/index.vue'),
                meta: {
                    title: '关于我',
                    icon: 'ri-folder-user-line',
                },
            },
            {
                path: '/callMe',
                name: 'callMe',
                component: () => import('@/views/callMe/index.vue'),
                meta: {
                    title: '联系我',
                    icon: 'ri-phone-line',
                },
            },
        ]
    },
    {
        path: '/tree',
        name: 'Tree',
        component: Layout,
        redirect: '/tree/tree-1/tree-1-1',
        meta: {
            title: '树状图',
            icon: 'ri-node-tree',
        },
        children: [
            {
                path: '/tree/tree-1',
                name: 'tree',
                component: () => import('@/views/tree/index.vue'),
                redirect: '/tree/tree-1',
                meta: {
                    title: '树状',
                    icon: 'ri-node-tree',
                },
                children: [
                    {
                        path: '/tree/tree-1/tree-1-1',
                        name: 'tree-1',
                        component: () => import('@/views/tree/tree-1/index.vue'),
                        meta: {
                            title: '树状-1',
                            icon: 'ri-node-tree',
                        },
                    },
                    {
                        path: '/tree/tree-1/tree-1-2',
                        name: 'tree-2',
                        component: () => import('@/views/tree/tree-2/index.vue'),
                        meta: {
                            title: '树状-2',
                            icon: 'ri-node-tree',
                        },
                    },
                ]
            },
        ]
    },
    {
        path: '/error',
        name: 'Error',
        component: Layout,
        redirect: '/error/404',
        meta: {
            title: '错误页',
            icon: 'ri-error-warning-line',
        },
        children: [
            {
                path: '/error/404',
                name: 'error404',
                component: () => import('@/views/errorPage/404.vue'),
                meta: {
                    title: '找不到资源',
                    icon: 'ri-error-warning-line',
                    // hidden: true,
                },
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/error/404',
        hidden: true,
    },
]
