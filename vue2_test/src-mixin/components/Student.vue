<template>
  <div class="student">
    <h2>姓名：{{name}}</h2>
    <h2 @click="msg">年龄：{{age}}</h2>
  </div>
</template>

<script>
import {hunhe} from "../hunhe";

export default {
  name:'Student',
  data() {
    return{
      name:'yafudo',
      age:19
    }
  },
  mixins:[hunhe]
}
</script>

<style>
.student {
  background-color: darkolivegreen;
}
</style>