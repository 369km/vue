<template>
  <div>
    <h2>名称：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>
    <button @click="sendName">把名字给APP</button>
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
  },
  methods:{
    sendName(){
      this.$emit('demo',this.name)
    }
  }
}
</script>