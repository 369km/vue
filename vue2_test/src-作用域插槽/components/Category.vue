<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :games="games"></slot>
  </div>
</template>
<script>

export default {
  name: 'Category',
  props: ['title'],
  data(){
    return{
      games:['红色警戒','穿越火线','劲舞团','LOL'],
    }
  }
}
</script>
<style scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
  background-color: orange;
}
img{
  width: 100%;
}
video{
  width: 100%;
}
</style>