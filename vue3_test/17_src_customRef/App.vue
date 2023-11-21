<template>
    <input type="text" v-model="keyWord" />
    <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from "vue";

export default {
    name: "App",
    setup() {
        // let keyWord = ref("hello"); 使用vue内置的ref

        //自定义一个ref
        function myRef(value) {
            let timer;

            return customRef((track, trigger) => {
                return {
                    get() {
                        console.log(
                            `有人从myRef这个容器中读取数据了，我把${value}给他了`
                        );
                        track(); //通知vue追踪value的变化
                        return value;
                    },
                    set(newValue) {
                        console.log(
                            `有人把myRef这个容器中数据改为了：${newValue}`
                        );
                        clearTimeout(timer);
                        timer = setTimeout(() => {
                            value = newValue;
                            trigger(); //通知vue重新解析模板
                        }, 500);
                    },
                };
            });
        }

        let keyWord = myRef("hello"); //使用自定义的ref
        return {
            keyWord,
        };
    },
};
</script>
