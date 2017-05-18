<template>
<div class="login-wrap">
        <div class="ms-title">V管理系统</div>
        <div class="ms-login">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <Form-item prop="user">
                <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <br>
            <Form-item prop="password">
                <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </Input>
            </Form-item>
            <br>
            <Form-item>
                <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
            </Form-item>
        </Form>
    </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        //this.$Message.success('提交成功!');
                        this.$router.push('/');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>
<style scoped>
    .login-wrap{
        width:100%;
        height:100%;
    }
    .ms-title{
        top:50%;
        width:100%;
        margin-top: 130px;
        text-align: center;
        font-size:30px;

    }
    .ms-login{
        text-align:center;
        top:50%;
        width:100%;
        height:160px;   
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        width:100%;
        height:36px;
    }
</style>