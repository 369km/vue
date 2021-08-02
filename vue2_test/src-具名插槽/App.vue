<template>
  <div class="container">
    <Category :title="美食" :list="foods">
      <img slot="a" src="https://s3.ax1x.com/2021/01/16/srJ1q0.jpg">
      <a slot="b" href="https://baijiahao.baidu.com/s?id=1608326069016958061&wfr=spider&for=pc">麻花</a>
    </Category>
    <Category :title="游戏" :list="games"/>
    <Category :title="电影" :list="films">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";

export default {
  name: 'App',
  components: {Category},
  data(){
    return{
      foods:['火锅','烧烤','牛排','小龙虾'],
      games:['红色警戒','穿越火线','劲舞团','LOL'],
      films:['《教父》','《拆弹传家》','《流浪地球》','《赌圣》'],
    }
  }
}
</script>
<style>
.container{
  display: flex;
  justify-content: space-around;
}
</style>
