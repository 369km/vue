<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition>
      <h1 class="test come" v-show="isShow">动画</h1>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Test1',
  data() {
    return {
      isShow: true
    }
  }
}
</script>
<style>
.test {
  background-color: orange;
}

.v-enter-active {
  animation: donghua 1s;
}

.v-leave-active {
  animation: donghua 1s reverse;
}

@keyframes donghua {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>