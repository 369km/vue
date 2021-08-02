<template>
  <h1>ref</h1>
  <h3>{{ str }}</h3>
  <button @click="changeStr">ref str</button>
  <h3>{{ obj.b }}</h3>
  <button @click="changeObj">ref obj</button>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'App',
  setup() {
    let str = ref('let outline = ref(a) use {{a}}')
    let obj=ref({
      b:'let obj=ref({b=xxx}) use {{obj.b}}'
    })

    function changeStr() {
      str.value = 'change a.value=xxx'
    }

    function changeObj(){
      obj.value.b='change obj.value.b=xxx'
    }
    return {
      str,
      obj,
      changeStr,
      changeObj
    }
  }
}
</script>
