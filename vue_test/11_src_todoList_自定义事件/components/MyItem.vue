<template>
    <li>
        <label>
            <input
                type="checkbox"
                :checked="todo.done"
                @change="changeChecked(todo.id)"
            />
            <!-- 以下写法虽然也能实现功能，但是它改变了props传递过来的参数的值，违反原则，不建议使用 -->
            <!-- <input type="checkbox" v-model="todo.done" /> -->
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="deleteThis(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name: "MyItem",
    props: ["todo", "changeChecked", "deleteItem"],
    methods:{
        deleteThis(id){
            if(confirm('确定要删除吗？')){
                this.deleteItem(id)
            }
        }
    }
};
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
li:hover {
    background-color: skyblue;
}

li:hover button {
    display: block;
}
</style>