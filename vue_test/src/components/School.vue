<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="sendSchName">提交学校名给app</button>
    </div>
</template>

<script>


export default {
    name: "School",
    data() {
        return {
            name:'幼儿园来啦地地地',
            address:'北京朝阳'
        };
    },
    props:['getSchoolName'],
    methods:{
        sendSchName(){
            this.getSchoolName(this.name)
        }
    }
};
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
    margin-top: 30px;
}
</style>