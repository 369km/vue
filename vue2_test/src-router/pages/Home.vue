<template>
  <div>
    <h2>我是Home组件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!--<router-view></router-view>-->

      <!--   缓存News组件   -->
      <!--<keep-alive include="News"><router-view></router-view></keep-alive>-->
      <keep-alive :include="['News','Message']"><router-view></router-view></keep-alive>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>