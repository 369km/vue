<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul>
      <li v-for="(l,index) in list" :key="index">{{ l }}</li>
    </ul>
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'Category',
  props: ['list', 'title']
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