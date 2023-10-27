<template>
    <div>
        <Student name="张三" :age="19" sex="男"></Student>
    </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
    name: "App",
    components: { Student },
};
</script>
