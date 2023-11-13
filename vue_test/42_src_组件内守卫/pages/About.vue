<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name: "About",
    beforeDestroy() {
        console.log("About组件即将销毁");
    },
    mounted() {
        console.log("About组件挂载完毕");
    },

    //通过路由规则，进入该组件时被调用
    beforeRouteEnter(to, from, next) {
        if (to.meta.isAuth) {
            if (localStorage.getItem("school") === "atguigu") {
                next();
            }
        } else {
            next();
        }
    },

    //通过路由规则，离开该组件时被调用
    beforeRouteLeave(to, from, next) {
        // ...
    },
};
</script>

<style>
</style>