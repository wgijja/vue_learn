<template>
    <Demo @hello="sayHello" msg="学校" school="尚硅谷">
        <template v-slot:qwe>
            <span>呜呜呜呜呜呜呜呜</span>
        </template>
    </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";

export default {
    name: "App",
    components: { Demo },
    setup() {
        function sayHello(value) {
            alert(`Demo组件中的hello事件被触发啦！收到的数据是：${value}`);
        }

        return {
            sayHello,
        };
    },
};
</script>
