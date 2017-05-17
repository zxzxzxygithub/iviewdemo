<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
    }

    .layout-assistant {
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copy {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
<template>
    <div class="layout">
        <!--顶部栏导航-->
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    导航四
                </Menu-item>
            </div>
        </Menu>
        <!--<Menu mode="horizontal" active-name="1">-->
        <!--<div class="layout-assistant">-->
        <!--<Menu-item name="1">二级导航</Menu-item>-->
        <!--<Menu-item name="2">二级导航</Menu-item>-->
        <!--<Menu-item name="3">二级导航</Menu-item>-->
        <!--</div>-->
        <!--</Menu>-->

        <Row>
<!--侧边栏导航-->
            <Col span="4">
            <div class="layout-content">
                <Menu active-name="1-2" width="auto" @on-select="clickmenu" @on-open-change="menuopenchange">
                    <Submenu  v-for="(subm,index) in sidemenus"  name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            {{ subm.name }}
                        </template>
                        <Menu-item v-for="menuitem in subm.subsidemenu"  :name="menuitem.id">{{ menuitem.name }}</Menu-item>

                    </Submenu>
                    <!--<Submenu name="2">-->
                        <!--<template slot="title">-->
                            <!--<Icon type="ios-keypad"></Icon>-->
                            <!--微信好友管理-->
                        <!--</template>-->
                        <!--<Menu-item name="2-1">选项 1</Menu-item>-->
                        <!--<Menu-item name="2-2">选项 2</Menu-item>-->
                    <!--</Submenu>-->
                    <!--<Submenu name="3">-->
                        <!--<template slot="title">-->
                            <!--<Icon type="ios-analytics"></Icon>-->
                            <!--聊天记录管理-->
                        <!--</template>-->
                        <!--<Menu-item name="3-1">选项 1</Menu-item>-->
                        <!--<Menu-item name="3-2">选项 2</Menu-item>-->
                    <!--</Submenu>-->
                    <!--<Submenu name="4">-->
                        <!--<template slot="title">-->
                            <!--<Icon type="ios-paper"></Icon>-->
                            <!--好友朋友圈管理-->
                        <!--</template>-->
                        <!--<Menu-item name="4-1">选项 1</Menu-item>-->
                        <!--<Menu-item name="4-2">选项 2</Menu-item>-->
                    <!--</Submenu>-->
                </Menu>
            </div>
            </Col>
 <!--tabs导航-->
            <Col span="20">
            <div>
                <Tabs type="card" closable @on-tab-remove="handleTabRemove" @on-click="clicktab"
                >
                    <Tab-pane
                    v-for="toptab in tabs"  v-if="toptab.show" v-html="Second"
                    :label="toptab.name"
                    >
                    </Tab-pane>
                    <!--<Tab-pane label="标签二" v-if="tab1">-->
                        <!--<UserContent></UserContent>-->
                    <!--</Tab-pane>-->
                    <!--<Tab-pane label="标签三" v-if="tab2">-->
                     <!---->
                        <!--<UserContent></UserContent>-->
                    <!--</Tab-pane>-->
                </Tabs>

            </div>
            </Col>
        </Row>

<!--版权说明-->
        <div class="layout-copy">
            2011-2017 &copy; Qiaoqiao
        </div>
    </div>
</template>

<script>
    import UserContent from './UserContent.vue';
    import Second from './Second.vue';
    import Third from './Third.vue';
    import Four from './Four.vue';
    import Five from './Five.vue';
    import Six from './Six.vue';
    import Seven from './Seven.vue';
    import Eight from './Eight.vue';
    import Night from './Night.vue';
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true,
                tabs: [],
                sidemenus: [

                    {
                        name: '运营微信号管理',
                        subsidemenu: [
                            {
                                id: '1-1',
                                name: '选项1',
                                page: '<Second></Second>',
                                show:false

                            }, {
                                id: '1-2',
                                name: '选项2',
                                page: '<Second></Second>',
                                show:false
                            }, {
                                id: '1-3',
                                name: '选项3'
                                ,
                                page: '<Second></Second>',
                                show:false
                            }
                        ]

                    }
                    ,
                    {
                        name: '微信好友管理',
                        subsidemenu: [
                            {
                                id: '2-1',
                                name: '选项1'
                                ,
                                page: Five,
                                show:false

                            }, {
                                id: '2-2',
                                name: '选项2'
                                ,
                                page: Six,
                                show:false
                            }
                        ]

                    },
                    {
                        name: '聊天记录管理',
                        subsidemenu: [
                            {
                                id: '3-1',
                                name: '选项1'
                                ,
                                page: Seven,
                                show:false

                            }, {
                                id: '3-2',
                                name: '选项2'
                                ,
                                page: Eight,
                                show:false
                            }
                        ]

                    },
                    {
                        name: '好友朋友圈管理',
                        subsidemenu: [
                            {
                                id: '4-1',
                                name: '选项1'
                                ,
                                page: Night,
                                show:false

                            }, {
                                id: '4-2',
                                name: '选项2'
                                ,
                                page: Five,
                                show:false
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            UserContent
        },
        created(){
            console.log('oncreate is doing ');
            var result =  [];
            for(var i=0;i<this.sidemenus.length; i++){
                console.log(this.sidemenus[i]);
                for(var j =0; j<this.sidemenus[i].subsidemenu.length; j++){
                    console.log(this.sidemenus[i].subsidemenu.length);
                    this.tabs.push(this.sidemenus[i].subsidemenu[j]);
                }
            }
        },
        methods: {
            clickmenu (id) {
//               alert("hello click"+name);
//                this.$router.push(id);
                for(var i=0; i<this.tabs.length; i++){
                    if(id == this.tabs[i].id){
                        this.tabs[i].show=true;
                    }
                }

            },
            menuopenchange(aaa){
//                alert("hello click"+aaa);
            }, handleTabRemove (name) {
//                for(var i=0; i<this.tabs.length; i++){
//                    if(id == this.tabs[i].id){
//                        this.tabs[i].show=true;
//                    }
//                }
                this.tabs[name].show =false;
            }, clicktab(name){
                this.$router.push(name);
            }
        },
        computed: {
            // a computed getter
             toptbs: function () {
                // `this` points to the vm instance

            }
        }
    }
</script>
