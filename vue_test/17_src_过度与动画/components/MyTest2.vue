<template>
    <div>
        <button @click="isShow = !isShow">显示隐藏</button>
        <transition-group name="hello" appear>
            <h1 key="1" v-show="!isShow">有你没我</h1>
            <h1 key="2" v-show="isShow">有我没你</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: "Test2",
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

.hello-enter,
.hello-leave-to {
    transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
    transition: 1s linear;
}

.hello-enter-to,
.hello-leave {
    transform: translateX(0);
}
</style>