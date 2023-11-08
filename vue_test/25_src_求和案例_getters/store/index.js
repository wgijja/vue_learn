//该文件用于创建Vuex中最为核心的store

//引入Vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions-用于响应组件中的动作
const actions = {
    incrementOdd(context, value) {
        console.log('actions被调用了')
        if (context.state.sum % 2) {
            context.commit('INCREMENT', value)
        }
    },
    incrementWait(context, value) {
        setTimeout(() => {
            context.commit('INCREMENT', value)
        }, 500);
    }
}

//准备multations-用于操作数据（state)
const mutations = {
    INCREMENT(state, value) {
        console.log('mutations被调用了')
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    },

}

//准备state-用于存储数据
const state = {
    sum: 0
}

const getters = {
    bigSum(state) {
        return state.sum * 10;
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})