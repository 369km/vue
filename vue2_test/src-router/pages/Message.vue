<template>
  <div>

    <ul>
      <li v-for="m in messages" :key="m.id">
        <!--query 方式-->
        <!--<router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`"> {{ m.title }}</router-link>-->
        <!--<router-link :to="{name:'detail',query:{id:m.id,title:m.title}}"> {{ m.title }}</router-link>-->

        <!--params 方式-->
        <!--<router-link :to="`/home/message/detail/${m.id}/${m.title}`"> {{ m.title }}</router-link>-->
        <router-link :to="{name:'detail',params:{id:m.id,title:m.title}}"> {{ m.title }}</router-link>

        <!--    编程式路由    -->
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Message',
  data() {
    return {
      messages: [
        {id: '01', title: 'msg01'},
        {id: '02', title: 'msg02'},
        {id: '03', title: 'msg03'},
      ]
    }
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: 'detail',
        params: {id: m.id, title: m.title}
      })
    },
    replaceShow(m) {
      this.$router.replace({
        name: 'detail',
        params: {id: m.id, title: m.title}
      })
    }
  }
}
</script>