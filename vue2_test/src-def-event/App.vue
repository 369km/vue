<template>
  <div>
    <h1>{{ msg }}{{name}}</h1>
    <School ref="test"/>
    <Student v-on:study="getName"/>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";

export default {
  name: 'App',
  components: {
    School,
    Student
  },
  data() {
    return {
      msg: '接收到的值：',
      name:''
    }
  },
  methods: {
    getName(val) {
      this.name=val
    },

  },
  mounted() {
    this.$refs.test.$once('demo', this.getName)
  }
}
</script>
