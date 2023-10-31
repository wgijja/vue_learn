<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStuName">发送学生姓名</button>
    </div>
</template>

<script>
export default {
    name: "Student",
    data() {
        return {
            name: "张三",
            sex: "男",
        };
    },
    methods: {
        sendStuName() {
            this.$bus.$emit('hello',this.name)
        },
    },
};
</script>

<style scoped>
.student {
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
}
</style>