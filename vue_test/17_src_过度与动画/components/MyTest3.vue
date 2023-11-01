<template>
    <div>
        <button @click="isShow = !isShow">显示隐藏</button>
        <transition-group
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
        >
            <h1 key="1" v-show="!isShow">有你没我</h1>
            <h1 key="2" v-show="isShow">有我没你</h1>
        </transition-group>
    </div>
</template>

<script>
import "animate.css";
export default {
    name: "Test3",
    data() {
        return {
            isShow: true,
        };
    },
};
</script>

<style>
h1 {
    background-color: green;
}
</style>