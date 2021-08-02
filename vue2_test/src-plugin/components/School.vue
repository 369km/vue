<template>
  <div class="school">
    <h2>名称：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>
  </div>
</template>

<script>

export default {
  name:'School',
  data() {
    return {
      name: '重庆交大',
      address: '二塘地铁站'
    }
  }
}
</script>

<style>
.school {
  background-color: orange;
}
</style>