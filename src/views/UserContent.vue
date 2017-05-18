<template>
<div class="content">
	<keep-alive>
      <router-view></router-view>
    </keep-alive>
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

  name: 'UserContent',

}
</script>

<style scoped>
.content{background: #fff;vertical-align: top; display: inline-block; width: 850px; height: 935px; margin-left: 20px; overflow-y: auto;overflow: hidden;}
.content-main{margin: 20px; text-align: left;}
</style>
