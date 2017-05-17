<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
<template>
    <div class="layout">
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
        <div class="layout-content">
            <Row>
                <i-col span="5">
                    <Menu active-name="1-2" width="auto"  @on-select="clickmenu" @on-open-change="menuopenchange">
                        <Submenu name="1" >
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                运营微信号管理
                            </template>
                            <Menu-item name="1-1" >选项 1</Menu-item>
                            <Menu-item name="1-2">选项 2</Menu-item>
                            <Menu-item name="1-3">选项 3</Menu-item>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                微信好友管理
                            </template>
                            <Menu-item name="2-1">选项 1</Menu-item>
                            <Menu-item name="2-2">选项 2</Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                聊天记录管理
                            </template>
                            <Menu-item name="3-1">选项 1</Menu-item>
                            <Menu-item name="3-2">选项 2</Menu-item>
                        </Submenu>
                        <Submenu name="4">
                            <template slot="title">
                                <Icon type="ios-paper"></Icon>
                                好友朋友圈管理
                            </template>
                            <Menu-item name="4-1">选项 1</Menu-item>
                            <Menu-item name="4-2">选项 2</Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="19">
                    <UserContent></UserContent>
                </i-col>

            </Row>
        </div>
        <div class="layout-copy">
            2011-2017 &copy; Qiaoqiao
        </div>
    </div>
</template>

<script>
    import UserContent from './UserContent.vue'
    export default {

        components: {
            UserContent
        },
        methods: {
            clickmenu (name) {
//               alert("hello click"+name);
                this.$router.push(name);

            },
            menuopenchange(aaa){
//                alert("hello click"+aaa);
            }
        }
    }
</script>
