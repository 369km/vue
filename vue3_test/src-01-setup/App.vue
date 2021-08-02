<template>
  <h1>setup</h1>
  <h3>{{outline}}</h3>
</template>

<script>

export default {
  name: 'App',
  setup(){
    let outline='setup 中包含了数据，方法，钩子'
    return{
      outline,
    }
  }
}
</script>
