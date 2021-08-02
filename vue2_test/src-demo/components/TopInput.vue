<template>
  <div class="top-input">
    <input type="text" placeholder="待完成事项" v-model="title" @keyup.enter="add">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
  name: 'TopInput',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    add() {
      if (!this.title) return
      const obj = {id: nanoid(), title: this.title.trim(), done: false}
      this.$emit('addItem',obj)
      this.title = ''
    }
  }
}
</script>

<style scoped>
.top-input input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.top-input input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.75), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>