<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  methods:{
    getStudents(){
      axios.get('http://localhost:8080/foo/student').then(
          response=>{
            console.log(response.data)
          },
          error => {
            console.log(error.message)
          }
      )
    }
  }
}
</script>
