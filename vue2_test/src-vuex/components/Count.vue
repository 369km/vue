<template>
  <div>
    <h1>当前值为：{{ sum }}</h1>
    <h3>当前值乘以十为：{{bigSum}}</h3>
    <h3 style="color: darkred">Person组件的总人数为：{{personList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">值为奇数才加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
  name: 'Count',
  data() {
    return {
      n: 1
    }
  },
  computed: {
    //方式一
    // sum(){return this.$store.state.countAbout.sum},
    // bigSum(){return this. $store.getters['countAbout/bigSum']},

    //方式二
    // ...mapState('countAbout',{'sum':'sum'}),
    //...mapGetters('countAbout',{'bigSum':'bigSum'}),

    //方式三
    ...mapState('countAbout',['sum']),
    ...mapGetters('countAbout',['bigSum']),

    ...mapState('personAbout',['personList']),
  },
  methods: {
    //方式一
    //increment() {this.$store.dispatch('countAbout/increment', this.n)},
    //decrement() {this.$store.dispatch('countAbout/decrement', this.n)},
    //incrementOdd() {this.$store.dispatch('countAbout/incrementOdd', this.n)},
    //incrementWait() {this.$store.dispatch('countAbout/incrementWait', this.n)},

    //方式二
    //...mapActions('countAbout',{'increment':'increment','decrement':'decrement'}),
    ...mapMutations('countAbout',{'incrementOdd':'INCREMENTODD','incrementWait':'INCREMENTWAIT'}),

    //方式三
    ...mapActions('countAbout',['increment','decrement']),
    //...mapMutations('countAbout',['INCREMENTODD','INCREMENTWAIT'])//上面调用的地方得改成'INCREMENTODD'、'INCREMENTWAIT'
  }
}
</script>