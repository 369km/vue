<template>
  <ul class="middle-list">
    <MiddleListItem v-for="l in list" :key="l.id" :l="l" :changeItem="changeItem" :deleteItem="deleteItem"/>
  </ul>
</template>

<script>
import MiddleListItem from "./MiddleListItem";

export default {
  name: 'MiddleList',
  props:['list','changeItem','deleteItem'],
  components: {MiddleListItem}
}
</script>

<style scoped>
.middle-list {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

.empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>