<template>
    <div id="root">
        <Test />
        <br>
        <Test2></Test2>
        <br>
        <Test3/>
    </div>
</template>

<script>
import Test from "./components/MyTest";
import Test2 from "./components/MyTest2";
import Test3 from "./components/MyTest3";

export default {
    name: "App",
    components: { Test, Test2,Test3 },
};
</script>


<style>
</style>