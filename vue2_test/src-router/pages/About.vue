<template>
  <h2>我是About组件</h2>
</template>

<script>

export default {
  name: 'About',
  //组件路由守卫
  beforeRouteEnter(to,from,next){
    if (to.meta.isAuth){
      if ('root'===localStorage.getItem('role')){
        next()
      }else {
        alert('无权限查看')
      }
    }else{
      next()
    }
  },
  beforeRouteLeave(to,from,next){
    next()
  }
}
</script>