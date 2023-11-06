<template>
    <div class="row">
        <div
            v-show="userInfo.users.length"
            class="card"
            v-for="user in userInfo.users"
            :key="user.login"
        >
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url" style="width: 100px" />
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
        <div v-show="userInfo.isFirst"><h2>欢迎使用！</h2></div>
        <div v-show="userInfo.isLoading"><h2>加载中....</h2></div>
        <div v-show="userInfo.errorMsg">
            <h2>{{ userInfo.errorMsg }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "List",
    data() {
        return {
            userInfo: {
                isFirst: true,
                isLoading: false,
                errorMsg: "",
                users: [],
            },
        };
    },
    methods: {
        saveUser(dataObj) {
            console.log("接收到数据了", dataObj);
            this.userInfo = { ...this.userInfo, ...dataObj };
        },
    },
    mounted() {
        this.$bus.$on("updateUser", this.saveUser);
    },
    beforeDestroy() {
        this.$bus.$off("updateUser");
    },
};
</script>

<style>
.album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: 0.75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img {
    margin-bottom: 0.75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>