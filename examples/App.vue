<template>
  <div id="app" style="height:100%;">
    <!-- <mainSkeleton v-if="!init"></mainSkeleton> -->
    <div style="height:100%;padding-top:80px;box-sizing:border-box;overflow:hidden;">
      <mainHeader style="margin-top:-80px;"></mainHeader>
      <div class="container" v-if="!isIndex">
        <sideNav class="nav"></sideNav>
        <router-view class="view"></router-view>
      </div>
      <router-view class="page" v-else></router-view>
      <mainFooter v-if="!isIndex"></mainFooter>
    </div>
  </div>
</template>

<script>
  import mainHeader from './components/header.vue'
  import mainFooter from './components/footer.vue'
  import sideNav from './components/side-nav.vue'
  // import mainSkeleton from './main.skeleton.vue'

  export default {
    name: 'app',
    data () {
      return {
        init: false,
        isIndex: true
      }
    },
    watch: {
      $route () {
        this.isIndex = this.$route.name === 'index'
      }
    },
    mounted () {
      //  这里模拟数据请求
      setTimeout(() => {
        this.init = true
      }, 250)
    },
    components: {
      mainHeader,
      sideNav,
      mainFooter
    }
  }
</script>

<style lang="less" type="text/less">
  @import "./assets/less/index";
  html,body{
    height:100%;
  }
  .container {
    height:100%;
    overflow:hidden;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
    .nav {
      float: left;
      width: 210px;
      height:100%;
      overflow:auto;
    }
    .view {
      float: left;
      width: calc(~'100% - 215px');
      padding: 32px 48px 48px;
      box-sizing: border-box;
      height:100%;
      overflow:auto;
    }
  }

  .container:after {
    content: "";
    clear: both;
    display: block;
  }
</style>
