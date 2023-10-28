<template>
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
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
};
</script>

<style scoped>
.demo {
    background-color: skyblue;
}
</style>