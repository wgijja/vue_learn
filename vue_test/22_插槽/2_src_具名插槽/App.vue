<template>
    <div class="container">
        <Category title="美食">
            <img
                slot="center"
                src="https://t7.baidu.com/it/u=2295973985,242574375&fm=193&f=GIF"
                alt=""
            />
            <a href="http://www.baidu.com" slot="footer" class="foot">更多美食</a>
        </Category>
        <Category title="游戏">
            <ul slot="center">
                <li v-for="(g, index) in games" :key="index">
                    {{ g }}
                </li>
            </ul>
            <div slot="footer" class="foot">
                <a href="http://www.baidu.com">单机游戏</a>
                <a href="http://www.baidu.com">网络游戏</a>
            </div>
        </Category>
        <Category title="电影">
            <video
                slot="center"
                controls
                src="http://clips.vorwaerts-gmbh.de/big_buck_bunnny.mp4"
            ></video>

            <template v-slot:footer>
                <div class="foot">
                    <a href="http://www.baidu.com">经典</a>
                    <a href="http://www.baidu.com">热闹</a>
                    <a href="http://www.baidu.com">推荐</a>
                </div>
                <h4>欢迎前来观景</h4>
            </template>
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
.container,
.foot {
    display: flex;
    justify-content: space-around;
}
h3 {
    background-color: orange;
    text-align: center;
}
img {
    width: 100%;
}
video {
    width: 100%;
}
h4 {
    text-align: center;
}
</style>
