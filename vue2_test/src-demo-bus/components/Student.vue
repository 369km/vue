<template>
  <div>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <button @click="sendName">把名字给APP</button>
    <button @click="unBind">解绑自定义事件</button>
  </div>
</template>

<script>
export default {
  name:'Student',
  data() {
    return{
      name:'yfd',
      age:18
    }
  },
  methods:{
    sendName(){
      this.$emit('study',this.name)
    },
    unBind(){
      this.$off(['study'])
    }
  }
}
</script>