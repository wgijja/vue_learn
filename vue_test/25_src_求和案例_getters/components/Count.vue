<template>
    <div>
        <h1>当前的和为：{{ $store.state.sum }}</h1>
        <h3>放大10倍为：{{ $store.getters.bigSum }}</h3>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">奇数加</button>
        <button @click="incrementWait">等等再加</button>
    </div>
</template>

//todo 写上各方法的实现

<script>
export default {
    name: "Count",
    data() {
        return {
            num: 1,
        };
    },
    methods: {
        increment() {
            this.$store.commit("INCREMENT", this.num);
        },
        decrement() {
            this.$store.commit('DECREMENT',this.num)
        },
        incrementOdd() {
            this.$store.dispatch('incrementOdd',this.num)
        },
        incrementWait() {
            this.$store.dispatch('incrementWait',this.num)
        },
    },
    mounted() {
        // console.log("Count", this);
    },
};
</script>

<style>
button {
    margin-left: 5px;
}
</style>