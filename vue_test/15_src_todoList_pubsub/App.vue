<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader @receiveFromHeader="receive"></MyHeader>
                <MyList
                    :todos="todos"
                ></MyList>
                <MyFooter
                    :todos="todos"
                    @checkedAll="checkedAll"
                    @clearAll="clearAll"
                ></MyFooter>
            </div>
        </div>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList.vue";

export default {
    name: "App",
    components: { MyHeader, MyFooter, MyList },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('itemList')) || []
        };
    },
    methods: {
        //新增
        receive(val) {
            this.todos.unshift(val);
        },
        //勾选
        changeChecked(id) {
            this.todos.forEach((i) => {
                if (id === i.id) i.done = !i.done;
            });
        },
        //删除
        deleteItem(topic,id) {
            this.todos = this.todos.filter((i) => i.id !== id);
        },
        //勾选全部或取消
        checkedAll(val) {
            this.todos.forEach((i) => (i.done = val));
        },
        //删除全部
        clearAll() {
            console.log("收到了");
            this.todos = this.todos.filter((i) => !i.done);
        },
    },
    watch: {
        todos: {
            deep: true,
            handler(newVal, oldVal) {
                localStorage.setItem("itemList", JSON.stringify(newVal));
            },
        },
    },
    mounted(){
        this.$bus.$on('changeChecked',this.changeChecked)
        pubsub.subscribe('deleteItem',this.deleteItem)
    },
    beforeDestroy(){
        this.$bus.$off('changeChecked')
        pubsub.unsubscribe('deleteItem')
    }
};
</script>


<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>