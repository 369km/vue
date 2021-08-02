<template>
  <div>
    <Student name="fudo" :age="17"></Student>
    <Student name="jime"></Student>
  </div>
</template>

<script>
import Student from "./components/Student";

export default {
  name: 'App',
  components: {
    Student
  }
}
</script>
