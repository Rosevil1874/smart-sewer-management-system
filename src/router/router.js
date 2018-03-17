import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

// export const preview = {
//     path: '/preview',
//     name: 'preview',
//     component: () => import('@/views/form/department/preview.vue')
// };

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/node-management',
        icon: 'earth',
        name: 'node-management',
        title: '监控点管理',
        component: Main,
        children: [
            { path: 'watchPoint', title: '监控点列表', name: 'watch-point', icon: 'eye', component: () => import('@/views/node-management/watch-point.vue') },
            { path: 'nodeList', title: '节点列表', name: 'node-list', icon: 'network', component: () => import('@/views/node-management/node-list.vue') },
            { path: 'maintainHistory', title: '维护记录 ', name: 'maintain-history', icon: 'settings', component: () => import('@/views/node-management/maintain-history.vue') }
        ]
    },
    {
        path: '/component',
        icon: 'stats-bars',
        name: 'component',
        title: '统计分析',
        component: Main,
        children: [
            {
                path: 'water-level',
                icon: 'waterdrop',
                name: 'water-level',
                title: '水位历史',
                component: () => import('@/views/my-components/water-level/water-level.vue')
            },
            {
                path: 'sewer',
                icon: 'ios-circle-filled',
                name: 'sewer',
                title: '井盖历史',
                component: () => import('@/views/my-components/sewer/sewer.vue')
            }
        ]
    },
    {
        path: '/staff-management',
        icon: 'person-stalker',
        name: 'staff-management',
        access: 0,              // 管理员权限
        title: '人员管理',
        component: Main,
        children: [
            { path: 'department', title: '按部门', name: 'department', access: 0, icon: 'clipboard', component: () => import('@/views/staff-management/department/department.vue') },
            { path: 'other', title: '其他', name: 'other', access: 0, icon: 'compose', component: () => import('@/views/staff-management/other/other.vue') }

        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    // preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
