//Person组件行为
import axios from 'axios'
import {nanoid} from 'nanoid'

export default {
    namespaced: true,
    actions: {
        addPerson(context, val) {
            context.commit('ADD_PERSON', val)
        },
        addSon(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social')
                .then(response => {
                    context.commit('ADD_PERSON',response.data)
                }, error => {
                    alert(error.message)
                })

        }
    },
    mutations: {
        ADD_PERSON(state, val) {
            const person={id:nanoid(),name:val}
            state.personList.unshift(person)
        }
    },
    state: {
        personList: [
            {'id': '001', 'name': 'foo'}
        ]
    },
    getters: {}
}