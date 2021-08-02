<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group name="animate__animated animate__bounce"
    enter-active-class="animate__swing" leave-active-class="animate__backOutLeft">
      <h1 class="test come" v-show="isShow" key="1">npm i animate.css</h1>
      <h1 class="test come" v-show="isShow" key="2">animate.style</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'Test2',
  data() {
    return {
      isShow: true
    }
  }
}
</script>
<style scoped>
h1 {
  background-color: orange;
}
</style>