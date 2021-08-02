<template>
  <ul>
    <!--  query 方式  -->
    <!--    <li>消息id:{{ $route.query.id }}</li>-->
    <!--    <li>消息title:{{ $route.query.title }}</li>-->

    <!--  params 方式  -->
    <!--    <li>消息id:{{ $route.params.id }}</li>-->
    <!--    <li>消息title:{{ $route.params.title }}</li>-->

    <!--    props方式-->
    <li>消息id:{{ id }}</li>
    <li>消息title:{{ title }}</li>

  </ul>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id', 'title'],
}
</script>