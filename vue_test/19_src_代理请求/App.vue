<template>
    <div id="root">
        <button @click="getStu">获取学生</button>
        <button @click="getCar">获取汽车</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "App",
    methods:{
        getStu(){
            axios.get('http://localhost:8080/api/students').then(
                response=>{
                    console.log('请求成功了',response.data)
                },
                error=>{
                    console.log('请求失败了',error.msg)
                }
            )
        },
        getCar(){
            axios.get('http://localhost:8080/2api/cars').then(
                response=>{
                    console.log('请求成功了',response.data)
                },
                error=>{
                    console.log('请求失败了',error.msg)
                }
            )
        }
    }
};
</script>

