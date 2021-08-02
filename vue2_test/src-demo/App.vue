<template>
  <div id="root">
    <div class="container">
      <div class="wrap">
        <TopInput @addItem="addItem"/>
        <MiddleList :list="list" :changeItem="changeItem" :deleteItem="deleteItem"/>
        <FooterItem :list="list" @changeAll="changeAll" @deleteDone="deleteDone"/>
      </div>
    </div>
  </div>
</template>

<script>
import TopInput from "./components/TopInput"
import MiddleList from "./components/MiddleList"
import FooterItem from "./components/FooterItem"

export default {
  name: 'App',
  data() {
    return {
      list: JSON.parse(localStorage.getItem("list")) || []
    }
  },
  watch: {
    list: {
      deep: true,
      handler(val) {
        localStorage.setItem("list", JSON.stringify(val))
      }
    }
  }
  ,
  methods: {
    addItem(obj) {
      this.list.unshift(obj)
    },
    changeItem(id) {
      this.list.forEach(l => {
        if (l.id === id) l.done = !l.done
      })
    },
    changeAll(flag) {
      this.list.forEach(l => l.done = flag)
    },
    deleteItem(id) {
      this.list = this.list.filter(l => l.id !== id)
    },
    deleteDone() {
      this.list = this.list.filter(l => !l.done)
    }
  },
  components: {TopInput, MiddleList, FooterItem}
}
</script>
<style>
body {
  background-color: #fff;
}

.container {
  width: 600px;
  margin: 0 auto;
}

.container .wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

</style>
