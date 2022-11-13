<template>
  <div id="app">
    <el-container>
      <!-- <router-view name="leftaside" class="el-aside" :judefullwidth="judefullwidth"/> -->
      <leftaside class="el-aside" :judefullwidth="judefullwidth" :drawer="drawer" :test="test" :testfullwidth="testfullwidth" @CloseLeftMenu="CloseLeftMenu" @CloseDrawer="CloseDrawer"/>
      <el-container>
        <el-header>
          <div style="display:flex">
            <span @click="OpenDrawer" :class="testfullwidth ? 'menu-open' : 'menu-close'"><i class="el-icon-s-operation"></i></span>
            <h1 class="Header-title">  Wei 的個人網站</h1>
          </div>
        </el-header>
        <router-view name="main" class="el-main"/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftaside from '@/components/LeftAside'
export default {
  components: {
    leftaside
  },
  data() {
    return {
      fullWidth: null,
      judefullwidth: true,
      testfullwidth: true,
      test: true,
      drawer: false
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
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
</style>
