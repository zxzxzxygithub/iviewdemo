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
    .layout-icon{
        width: 50px;
        height: 50px;
        margin-left: 10px;
    }

</style>
<template>
    <div class="layout">
        <Row type="flex"  align="middle">
            <Col span="2"><img src="../images/logo.png" class="layout-icon"></img></Col>
            <Col span="3">悄悄科技云控管理系统</Col>
            <Col span="2" offset="2"></Col>
            <Col span="2">{{date}}</Col>
            <Col span="2">星期四</Col>
            <Col span="2">在线人数:{{onlineCount}}</Col>
            <Col span="2">在线微信号:{{onlineWXCount}}</Col>
            <Col span="2">账号：admin</Col>
            <Col span="2">
                <Dropdown trigger="click">
                    <a href="javascript:void(0)">个人设置
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item><span v-on:click="userInfo"> 个人信息</span></Dropdown-item>
                        <Dropdown-item><span v-on:click="modifyPwd"> 修改密码</span></Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </Col>
            <Col span="2"><Button type="text" v-on:click="logoutClick">退出登录</Button></Col>
        </Row>


        <Row>
<!--侧边栏导航-->
            <Col span="4">
            <div class="layout-content">
                <Menu active-name="1-2" width="auto" @on-select="clickMenu" @on-open-change="menuoChange">
                    <Submenu  v-for="(subm,index) in sidemenus"  :name="index" :key="subm.label">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            {{ subm.label }}
                        </template>
                        <Menu-item v-for="menuitem in subm.subsidemenu"  :name="menuitem.id" :key="menuitem.id">{{ menuitem.label }}</Menu-item>

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
                <Tabs type="card" closable :value="activeTabId" @on-tab-remove="handleTabRemove" @on-click="clickTab"
                >
                    <Tab-pane
                    v-for="(toptab,index) in tabs"  v-if="toptab.show"
                    :label="toptab.label" :name="toptab.id" :key="toptab.id"
                    >
                        <keep-alive>
                            <component v-bind:is="toptab.component"></component>
                        </keep-alive>
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
                date: new Date().toDateString(),
                onlineCount:133,
                onlineWXCount:322,

                //当前激活的tab的id
                activeTabId: '1-1',

                //所有tabs
                tabs: [],

                //所有菜单及tabs的配置
                sidemenus: [

                    {
                        label: '运营微信号管理',
                        subsidemenu: [
                            {
                                id: '1-1',
                                label: '选项1',
                                component: 'Second',
                                show:false

                            }, {
                                id: '1-2',
                                label: '选项2',
                                component: 'Third',
                                show:false
                            }, {
                                id: '1-3',
                                label: '选项3'
                                ,
                                component: 'Four',
                                show:false
                            }
                        ]

                    }
                    ,
                    {
                        label: '微信好友管理',
                        subsidemenu: [
                            {
                                id: '2-1',
                                label: '选项2-1',
                                component: 'Five',
                                show:false

                            }, {
                                id: '2-2',
                                label: '选项2-2'
                                ,
                                component: 'Six',
                                show:false
                            }
                        ]

                    },
                    {
                        label: '聊天记录管理',
                        subsidemenu: [
                            {
                                id: '3-1',
                                label: '选项3-1',
                                component: 'Seven',
                                show:false

                            }, {
                                id: '3-2',
                                label: '选项3-2'
                                ,
                                component: 'Eight',
                                show:false
                            }
                        ]

                    },
                    {
                        label: '好友朋友圈管理',
                        subsidemenu: [
                            {
                                id: '4-1',
                                label: '选项4-1'
                                ,
                                component: 'Night',
                                show:false

                            }, {
                                id: '4-2',
                                label: '选项4-2'
                                ,
                                component: 'Second',
                                show:false
                            }
                        ]
                    }
                ]
            }
        },

        components: {
            UserContent,
            Second,
            Third,
            Four,
            Five,
            Six,
            Seven,
            Eight,
            Night
        },

        created(){
            this.copyTabs();
        },

        methods: {
            logoutClick(){
                this.$router.push('/login')
            },
            userInfo()
            {
                alert("个人信息")
            },
            modifyPwd()
            {
                alert("修改密码")
            },

            //将sidemenus配置单独提取到tabs，方便遍历
            copyTabs(){
                for(var i=0;i<this.sidemenus.length; i++){
                    //console.log(this.sidemenus[i]);
                    for(var j =0; j<this.sidemenus[i].subsidemenu.length; j++){
                        this.tabs.push(this.sidemenus[i].subsidemenu[j]);
                    }
                }
            },

            //展开菜单
            menuoChange(){

            },

            //点击菜单
            clickMenu (id) {
                for(var i=0; i<this.tabs.length; i++){
                    if(id == this.tabs[i].id){
                        console.log(id,this.tabs[i])
                        this.tabs[i].show = true;
                        this.activeTabId = this.tabs[i].id;
                        return false;
                    }
                }
            },

            //激活最后一个show为true的tab
            activatioLastShowTab(){
                for(var i=this.tabs.length-1; i>=0; i--){
                    if(this.tabs[i].show){
                        this.activeTabId = this.tabs[i].id;
                        return false;
                    }
                }
            },
            
            //关闭tab
            handleTabRemove (id) {
                for(var i=0; i<this.tabs.length; i++){
                    if(id == this.tabs[i].id){
                        this.tabs[i].show = false;
                        this.activatioLastShowTab();
                        return false;
                    }
                }
            }, 
            
            //点击tab
            clickTab(id){
                for(var i=0; i<this.tabs.length; i++){
                    if(id == this.tabs[i].id){
                        this.activeTabId = this.tabs[i].id;
                    }
                }
            }
        }
    }
</script>
