<template>
    <div>
        <h1>消息id：{{$route.query.id}}</h1>
        <h1>消息标题：{{$route.query.title}}</h1>
    </div>
</template>

<script>
export default {
    name: "Detail",
};
</script>

<style>
</style>