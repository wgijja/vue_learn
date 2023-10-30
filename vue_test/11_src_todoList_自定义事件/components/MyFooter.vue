<template>
    <div class="todo-footer"  v-show="todoTotal">
        <label>
            <!-- <input type="checkbox" :checked="isAll" @change="changeAll"/> -->
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>{{ doneTotal }}</span> / {{ todoTotal }}
        </span>
        <button class="btn btn-danger" @click="clearAllTodo">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: "MyFooter",
    props: ["todos"],
    computed: {
        todoTotal() {
            return this.todos.length;
        },
        doneTotal() {
            return this.todos.reduce(
                (pre, current) => pre + (current.done ? 1 : 0),
                0
            );
        },
        isAll: {
            get(){
                return this.todoTotal === this.doneTotal;
            },
            set(val){
                this.$emit('checkedAll',val)
            }
        },
    },
    methods:{
        clearAllTodo(){
            this.$emit('clearAll')
        }
    }
};
</script>

<style>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>