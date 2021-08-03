<template>
  <h1>reactive</h1>
  <h3>{{ data.name }}</h3>
  <p>{{ data.age }}</p>
  <p>{{ data.hobby }}</p>
  <p>{{ data.children }}</p>
  <button @click="changeHobby">改变爱好</button>
</template>

<script>
import {reactive} from 'vue'

export default {
  name: 'App',
  setup() {
    let data = reactive({
      name: '于谦',
      age: 59,
      hobby: ['抽烟', '喝酒', '烫头'],
      children: {
        name: '于思洋',
        age: 6
      }
    })

    function changeHobby() {
      data.hobby[0] = '相声'
    }

    return {
      data,
      changeHobby
    }
  }
}
</script>
