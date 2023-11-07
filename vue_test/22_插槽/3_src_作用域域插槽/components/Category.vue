<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <slot :games="games">没有值的时候默认显示值</slot>
    </div>
</template>

<script>
export default {
    name: "Category",
    props: ["title"],
    data() {
        return {
            games: ["大表哥", "古墓丽影", "死亡搁浅"],
        };
    },
};
</script>

<style>
.category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
</style>