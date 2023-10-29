<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStuName">提交学生名给app</button>
    </div>
</template>

<script>

export default {
    name: "Student",
    data() {
        return {
            name:'张三',
            sex:'男'
        };
    },
    methods:{
        sendStuName(){
            //触发Student组件实例上的atguigu事件
            this.$emit('atguigu',this.name,666,888,99)
        }
    }
};
</script>

<style scoped>
.student {
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
}
</style>