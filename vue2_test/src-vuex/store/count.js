//Count组件行为

export  default {
    namespaced:true,
    actions: {
        increment(context, val) {
            context.commit('INCREMENT', val)
        },
        decrement(context, val) {
            context.commit('DECREMENT', val)
        },
        incrementOdd(context, val) {
            context.commit('INCREMENTODD', val)
        },
        incrementWait(context, val) {
            context.commit('INCREMENTWAIT', val)
        },
    },
    mutations: {
        INCREMENT(state, val) {
            state.sum += val
        },
        DECREMENT(state, val) {
            state.sum -= val
        },
        INCREMENTODD(state, val) {
            if (state.sum % 2) {
                state.sum += val
            }
        },
        INCREMENTWAIT(state, val) {
            setTimeout(() => {
                state.sum += val
            }, 500)
        },
    },
    state: {
        sum: 0,
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}