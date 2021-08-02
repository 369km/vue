<template>
  <ul>
    <li>news1<input type="text"></li>
    <li>news2<input type="text"></li>
    <li>news3<input type="text"></li>
    <li :style="{opacity}">路由生命周期</li>
  </ul>
</template>
<script>
export default {
  name: 'News',
  data(){
    return{
      opacity:1
    }
  },
  activated() {
    this.timer=setInterval(()=>{
      this.opacity-=0.1
      if (this.opacity<=0)this.opacity=1
    },16)
  },
  deactivated() {
    clearInterval(this.timer)
  }
}
</script>