<template>
    <div class="student">
        <h2 @click="showName">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>

// 引入混入
// import {mixin,mixin2} from '../mixin'

export default {
    name: "Student",
    data() {
        return {
            name:'幼儿园',
            address:'北京朝阳'
        };
    },
    // mixins:[mixin,mixin2]
};
</script>

<style>
.student {
    background-color: orange;
}
</style>