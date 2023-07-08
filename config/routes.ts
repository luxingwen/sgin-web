export default [
    {
        path: '/',
        redirect: '/home',
    },
    {
        name: '首页',
        path: '/home',
        component: './Home',
    },
    {
        name: '权限演示',
        path: '/access',
        component: './Access',
        hideInMenu: true,
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
        hideInMenu: true,
    },
    {
        name: ' payments 示例',
        path: '/payments',
        component: './payments',
        hideInMenu: true,
    },
    {
        name: 'apps',
        path: '/apps',
        component: './apps',
    },
    {
        name: '用户管理',
        path: '/users',
        component: './users',
    },
    {
        name: '角色管理',
        path: '/roles',
        component: './roles',
    },
    {
        name: ' 登录',
        path: '/login',
        component: './User/Login',
        layout: false,
    },
]