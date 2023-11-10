<template>
    <div>
        <h1>消息id：{{id}}</h1>
        <h1>消息标题：{{title}}</h1>
    </div>
</template>

<script>
export default {
    name: "Detail",
    props:["id",'title']
};
</script>

<style>
</style>