<template>
  <div>
    <h1 ref="h">hello</h1>
    <School ref="sch"></School>
    <Student></Student>
    <button @click="clk">点击获取实例</button>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name:'App',
  components:{
    School,
    Student
  },
  methods:{
    clk(){
      console.log(this.$refs)
    }
  }
}
</script>
