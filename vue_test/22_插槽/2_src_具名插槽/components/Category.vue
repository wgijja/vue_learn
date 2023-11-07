<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <slot name="center">没有值的时候默认显示值</slot>
        <slot name="footer">没有值的时候默认显示值</slot>
    </div>
</template>

<script>
export default {
    name: "Category",
    props: ["title"],
};
</script>

<style>
.category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
</style>