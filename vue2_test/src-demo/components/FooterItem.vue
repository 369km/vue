<template>
  <div class="footer-item" v-if="total">
    <label>
      <input type="checkbox" v-model="isAll">
    </label>
    <span>
    <span>已完成{{ doneTotal }}</span>/全部{{ total }}
  </span>
    <button class="btn btn-danger" @click="clear">清除已完成事项</button>
  </div>
</template>

<script>

export default {
  name: 'FooterItem',
  props: ['list'],
  computed: {
    total() {
      return this.list.length
    },
    doneTotal() {
      return this.list.filter(l => l.done).length
    },
    isAll: {
      get() {
        return this.total === this.doneTotal && this.total > 0
      },
      set(val) {
        this.$emit('changeAll',val)
      }
    }
  },
  methods: {
    clear() {
      if (confirm("确定清除吗？")) {
        this.$emit('deleteDone')
      }
    }
  }
}
</script>

<style scoped>
.footer-item {
  height: 40px;
  line-height: 40px;
  padding-left: 1px;
  margin-top: 5px;
}

.footer-item label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.footer-item label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.footer-item button {
  float: right;
  margin-top: 5px;
}
</style>