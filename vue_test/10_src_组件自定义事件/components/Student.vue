<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStuName">提交学生名给app</button>
        <button @click="unBind">解绑atguigu事件</button>
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
            // this.$emit('demo')
        },
        unBind(){
            this.$off('atguigu')//解绑一个自定义事件
            //this.$off(['atguigu','demo']) //解绑多个自定义事件
            // this.$off() //解绑全部自定义事件

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