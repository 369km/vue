<template>
  <div class="bkg-c">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
  </div>
</template>

<script>

export default {
  name:'Student',
  data() {
    return{
      name:'yafudo',
      age:19
    }
  }
}
</script>

<style scoped>
.bkg-c {
  background-color: darkolivegreen;
}
</style>