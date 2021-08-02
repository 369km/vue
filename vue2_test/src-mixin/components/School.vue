<template>
  <div class="school">
    <h2>名称：{{ name }}</h2>
    <h2 @click="msg">地址：{{ address }}</h2>
  </div>
</template>

<script>
import {hunhe} from "../hunhe";

export default {
  name:'School',
  data() {
    return {
      name: '重庆交大',
      address: '二塘地铁站'
    }
  },
  mixins:[hunhe]
}
</script>

<style>
.school {
  background-color: orange;
}
</style>