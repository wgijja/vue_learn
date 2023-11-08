<template>
    <div>
        <h1>当前的和为：{{ sum }}</h1>
        <h3>放大10倍为：{{ bigSum }}</h3>
        <h3>我在：{{ school }},学习：{{ subject }}</h3>
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
import { mapState, mapGetters } from "vuex";

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
            this.$store.commit("DECREMENT", this.num);
        },
        incrementOdd() {
            this.$store.dispatch("incrementOdd", this.num);
        },
        incrementWait() {
            this.$store.dispatch("incrementWait", this.num);
        },
    },
    computed: {
        //靠程序员自己新版去写计算属性
        /* sum() {
            return this.$store.state.sum;
        },
        school() {
            return this.$store.state.school;
        },
        subject() {
            return this.$store.state.subject;
        }, */

        //借助 mapState 生成计算属性，从state中读取数据（对象式，key是计算属性名，val是state中的名字，需要用字符串）
        // ...mapState({ sum: "sum", school: "school", subject: "subject" }),

        //借助 mapState 生成计算属性，从state中读取数据（数组式）
        ...mapState(["sum", "school", "subject"]),

        //借助 mapGetters 生成计算属性，从getters中读取数据（对象式，key是计算属性名，val是getters中的名字，需要用字符串）
        // ...mapGetters({ bigSum: "bigSum" }),

        //借助 mapGetters 生成计算属性，从getters中读取数据（数组式）
        ...mapGetters(["bigSum"]),
    },
};
</script>

<style>
button {
    margin-left: 5px;
}
</style>