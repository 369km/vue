<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition-group>
      <h1 class="test come" v-show="isShow" key="1">过度组</h1>
      <h1 class="test come" v-show="isShow" key="2">过度组</h1>
    </transition-group>
  </div>
</template>

<script>

export default {
  name: 'Test',
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

.v-enter-active, .v-leave-active {
  transition: 1s linear;
}

/*进入的起点，离开的终点*/
.v-enter, .v-leave-to {
  transform: translateX(-100%);
}

/*进入的终点，离开的起点*/
.v-enter-to, .v-leave {
  transform: translateX(0);
}
</style>