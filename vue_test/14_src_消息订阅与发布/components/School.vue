<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
import pubscb from "pubsub-js";
export default {
    name: "School",
    data() {
        return {
            name: "幼儿园来啦地地地",
            address: "北京朝阳",
        };
    },
    mounted() {
        // this.$bus.$on('hello', (val) => {
        //     console.log("我是学校组件，我接收到了数据：", val);
        // });
        this.pubId = pubscb.subscribe("hello", (topic, data) => {
            console.log("有人发布了hello消息，我收到了", data);
        });
    },
    beforeDestroy() {
        // this.$bus.$off('hello')
        pubscb.unsubscribe(this.pubId)
    },
};
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
    margin-top: 30px;
}
</style>