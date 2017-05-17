
const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children: [
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: '1-1',
                component: (resolve) => require(['./views/UserLiveRecord.vue'], resolve)
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: '1-2',
                component: (resolve) => require(['./views/Second.vue'], resolve)
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: '1-3',
                component: (resolve) => require(['./views/Third.vue'], resolve)
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: '2-1',
                component: (resolve) => require(['./views/Four.vue'], resolve)
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: '2-2',
                component: (resolve) => require(['./views/Five.vue'], resolve)
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: '3-1',
                component: (resolve) => require(['./views/Six.vue'], resolve)
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: '3-2',
                component: (resolve) => require(['./views/Seven.vue'], resolve)
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: '4-1',
                component: (resolve) => require(['./views/Eight.vue'], resolve)
            },
            {
                // 当 /user/:id/profile 匹配成功，
                // UserProfile 会被渲染在 User 的 <router-view> 中
                path: '4-2',
                component: (resolve) => require(['./views/Night.vue'], resolve)
            }

        ]
    }
];
export default routers;
