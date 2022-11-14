<template>
  <div id="app">
    <el-container>
      <leftaside class="el-aside" :judefullwidth="judefullwidth" :drawer="drawer" :test="test" :testfullwidth="testfullwidth" @CloseLeftMenu="CloseLeftMenu" @CloseDrawer="CloseDrawer"/>
      <el-container>
        <el-header>
          <div style="display:flex">
            <span @click="OpenDrawer" :class="testfullwidth ? 'menu-open' : 'menu-close'"><i class="el-icon-s-operation"></i></span>
            <h1 class="Header-title">  Wei 的個人網站</h1>
          </div>
        </el-header>
        <el-main class="main">
          <router-view name="main"/>
        </el-main>
        <el-footer>
          <div>
            <div style="display: flex;flex-direction: column;">
              <span>此網站僅是測試，如有侵權請 <router-link to="/ContactMe" >聯絡我</router-link> ，會立即下架該相關資訊</span>
              <span>信箱 : test@gmail.com</span>
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
export default {
  components: {
    leftaside,
    RouterLink
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
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  height: auto !important;
}

.el-aside {
  // background-color: #D3DCE6;
  color: #333;
  text-align: left;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 40px;
  overflow: initial !important;
}

body > .el-container {
  margin-bottom: 40px;

}

.el-container{
  min-height: 100%;
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
  min-height:100%;
}
</style>
