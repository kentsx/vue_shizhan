<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/header/'
import Footer from './components/footer/'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    Footer
  }
}
</script>

<style>

</style>
