<template>
  <div class="student">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
  </div>
</template>

<script>
export default {
  name:'Student',
  data() {
    return{
    }
  },
  // props:['name','age']
  /*props:{
    name:String,
    age:Number
  }*/
  props:{
    name:{
      type:String,
      required:true
    },
    age:{
      type:Number,
      default:99
    }
  }
}
</script>

<style>
.student {
  background-color: darkolivegreen;
}
</style>