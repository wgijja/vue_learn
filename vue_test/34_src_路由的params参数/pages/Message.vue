<template>
    <div>
        <ul>
            <li v-for="d in detailList" :key="d.id">
                <!-- 路由params传参，字符串写法 -->
                <!-- <router-link
                    :to="`/home/message/detail/${d.id}/${d.title}`"
                    >{{ d.title }}</router-link
                > -->

                <!-- 路由params传参，对象写法 -->
                <router-link
                    :to="{
                        name: 'detail',
                        params: {
                            id: d.id,
                            title: d.title,
                        },
                    }"
                    >{{ d.title }}</router-link
                >
            </li>
        </ul>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Message",
    data() {
        return {
            detailList: [
                { id: "001", title: "消息001" },
                { id: "002", title: "消息002" },
                { id: "003", title: "消息003" },
                { id: "004", title: "消息004" },
            ],
        };
    },
};
</script>

<style>
</style>