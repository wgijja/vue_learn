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
        <button @click="increment(num)">+</button>
        <button @click="decrement(num)">-</button>
        <button @click="incrementOdd(num)">奇数加</button>
        <button @click="incrementWait(num)">等等再加</button>
    </div>
</template>

//todo 写上各方法的实现

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "Count",
    data() {
        return {
            num: 1,
        };
    },
    methods: {
        //程序员自己写的方法
        /* increment() {
            this.$store.commit("INCREMENT", this.num);
        },
        decrement() {
            this.$store.commit("DECREMENT", this.num);
        }, */
        //使用mapMutations生成的方法，方法中会去调用 commit 方法联系mutations。对象写法
        ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}),
        //使用mapMutations生成的方法，方法中会去调用 commit 方法联系mutations。数组写法
        // ...mapMutations(["INCREMENT", "DECREMENT"]),

        
        //程序员自己写的方法
        /* incrementOdd() {
            this.$store.dispatch("incrementOdd", this.num);
        },
        incrementWait() {
            this.$store.dispatch("incrementWait", this.num);
        }, */
        //使用mapMutations生成的方法，方法中会去调用 dispatch 方法联系actions。对象写法
        // ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'})
        //使用mapMutations生成的方法，方法中会去调用 dispatch 方法联系actions。数组写法
        ...mapActions(['incrementOdd','incrementWait'])
    },
    computed: {
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