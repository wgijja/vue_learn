<template>
    <div class="container">
        <search/>
        <List/>
    </div>
</template>

<script>
import Search from "./components/Search";
import List from "./components/List";

export default {
    name: "App",
    components: { Search, List },
};
</script>

