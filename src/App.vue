<template>
  <div id="app">
    <backtop/>
    <el-container class="container">
      <el-container>
        <el-header style="box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);z-index: 1;">
          <div style="display:flex">
            <span @click="OpenDrawer" :class="testfullwidth ? 'menu-open' : 'menu-close'"><i class="el-icon-s-operation"></i></span>
            <h1 class="Header-title"> <router-link to="/"> Wei 的個人網站 </router-link> </h1>
          </div>
        </el-header>
        <el-main class="main">
          <leftaside class="el-aside" :judefullwidth="judefullwidth" :drawer="drawer" :test="test" :testfullwidth="testfullwidth" @CloseLeftMenu="CloseLeftMenu" @CloseDrawer="CloseDrawer"/>
          <div style="width:100%;">
            <router-view name="main"/>
          </div>
        </el-main>
        <el-footer>
          <div>
            <div class="footer-div" style="">
              <span>此網站僅是測試，如有侵權請 <router-link to="/ContactMe" style="color:cornflowerblue">聯絡我</router-link> ，會立即下架該相關資訊</span>
              <span>信箱 : weiwebsite1115@gmail.com </span>
              <span> 網站是使用 <a href="https://v2.cn.vuejs.org/index.html" target="_blank" style="color: cornflowerblue;text-decoration: underline;"> Vue.js </a> 所撰寫 </span>
            </div>
            <div>
              Copyright © {{ year }} {{ owner }}. All rights reserved.
            </div>
          </div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftaside from '@/components/LeftAside'
import { RouterLink } from 'vue-router'
import backtop from '@/components/BacktopC'
export default {
  components: {
    leftaside,
    RouterLink,
    backtop
  },
  data() {
    return {
      fullWidth: null,
      judefullwidth: true,
      testfullwidth: true,
      test: true,
      drawer: false,

      year: new Date().getFullYear(),
      owner: 'Wei'
    }
  },
  methods: {
    CloseLeftMenu() {
      this.judefullwidth = !this.judefullwidth
    },
    OpenDrawer () {
      this.drawer = !this.drawer
    },
    CloseDrawer () {
      this.drawer = !this.drawer
    }
  },
  mounted() {
    this.fullWidth = document.body.clientWidth
    window.onresize = () => {
      return (() => {
        this.fullWidth = document.body.clientWidth
      })()
    }
  },
  watch: {
    fullWidth: {
      handler: function (val, oldVal) {
        if (val < 1024) {
          this.judefullwidth = true
          this.testfullwidth = true

          this.test = false
        } else {
          this.judefullwidth = false
          this.testfullwidth = false
          this.drawer = false
          this.test = true
        }
      }
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "NotoSansTC";
  src: url('@/assets/font/NotoSansTC/NotoSansTC-Bold.otf')format('truetype');
}
#app {
  font-family: "微軟正黑體", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-header, .el-footer {
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  height: auto !important;
}

.el-aside {
  color: #333;
  text-align: left;
  line-height: 200px;
  height: 100%;
}

.el-main {
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  background-blend-mode: multiply;
  text-align: center;
  line-height: 40px;
  overflow: initial !important;
  // 修改
  display: flex !important;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container{
  min-height: 100%;
  position: relative;
}

.el-card{
  border-radius: 0.55rem !important;
}

.container{
  min-height: 100vh;
  position: relative;
}

.Header-title{
  margin: 0;
  width:100%;
  font-size:30px;
}

.menu-open{
  font-size: 30px;
  display: block;
}
.menu-close{
  font-size: 30px;
  display: none;
}

.el-popup-parent--hidden{
  padding-right: 0 !important;
}
.main{
  // min-height:100%;
  padding: 0 !important;
}

.footer-div{
  display: flex;
  flex-direction: column;
}
@media screen and (max-width:992px) {
  .footer-div{
    word-break: break-all;
  }
  .main{
    padding: 10px !important;
  }
}
</style>
