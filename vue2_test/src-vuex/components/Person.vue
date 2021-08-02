<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件当前值乘以十为：{{bigSum}}</h3>
    <input type="text" placeholder="名字" v-model="name">
    <button @click="addPerson">添加</button>
    <button @click="addSon">添加一句话</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Person',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    bigSum(){
      return this.$store.getters['countAbout/bigSum']
    },
    personList() {
      return this.$store.state.personAbout.personList
    }
  },
  methods: {
    addPerson() {
      this.$store.dispatch('personAbout/addPerson',this.name)
      this.name=''
    },
    addSon(){
      this.$store.dispatch('personAbout/addSon')
    }
  }
}
</script>