<template>
  <li>
    <label>
      <input type="checkbox" :checked="l.done" @change="handleCheck(l.id)">
      <span v-show="!l.isEdit">{{ l.title.slice(0, 29) }}</span>
      <input v-show="l.isEdit" type="text" :value="l.title" @blur="handleEditBlur(l,$event)" ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="handleDelete(l.id)">删除</button>
    <button class="btn btn-edit" v-show="!l.isEdit" @click="handleEdit(l)">编辑</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js"

export default {
  name: 'MiddleListItem',
  methods: {
    handleCheck(id) {
      this.$bus.$emit('changeItem', id)
    },
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        // this.$bus.$emit('deleteItem',id)
        pubsub.publish('deleteItem', id)
      }
    },
    handleEdit(l) {
      if (l.hasOwnProperty('isEdit')) {
        l.isEdit = true
      } else {
        this.$set(l, 'isEdit', true)
      }
      this.$nextTick(function (){
        this.$refs.inputTitle.focus()
      })
    },
    handleEditBlur(l,e) {
      l.isEdit = false
      if (!e.target.value.trim())return alert('输入不能为空')
      this.$bus.$emit('editItem',l.id,e.target.value)
    }
  },
  props: ['l']
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
  margin-right: 1px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>