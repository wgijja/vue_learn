<template>
    <div class="container">
        <Category title="美食">
            <img src="https://t7.baidu.com/it/u=2295973985,242574375&fm=193&f=GIF" alt="">
        </Category>
        <Category title="游戏">
            <ul>
                <li v-for="(g,index) in games" :key="index">
                {{ g }}</li>
            </ul>
        </Category>
        <Category title="电影">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunnny.mp4"></video>
        </Category>
    </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
    name: "App",
    components: { Category },
    data() {
        return {
            foods: ["香蕉", "苹果", "可乐"],
            games: ["大表哥", "古墓丽影", "死亡搁浅"],
            movies: ["钢铁侠", "蜘蛛侠", "让子弹飞"],
        };
    },
};
</script>

<style>
.container {
    display: flex;
    justify-content: space-around;
}
h3 {
    background-color: orange;
    text-align: center;
}
img{
    width: 100%;
}
video{
    width: 100%;
}
</style>
