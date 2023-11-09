export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        INCREMENT(state, value) {
            console.log('mutations被调用了')
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        },

    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',

    },
    getters: {

        bigSum(state) {
            return state.sum * 10;
        }
    }
}