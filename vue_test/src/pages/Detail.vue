<template>
    <div>
<<<<<<< HEAD
        <h1>消息id：{{id}}</h1>
        <h1>消息标题：{{title}}</h1>
=======
        <h1>消息id：{{$route.query.id}}</h1>
        <h1>消息标题：{{$route.query.title}}</h1>
>>>>>>> 3a9a80a4d84a0ebe3efa7603d4af799b3360fb1e
    </div>
</template>

<script>
export default {
    name: "Detail",
<<<<<<< HEAD
    props:["id",'title']
=======
>>>>>>> 3a9a80a4d84a0ebe3efa7603d4af799b3360fb1e
};
</script>

<style>
</style>