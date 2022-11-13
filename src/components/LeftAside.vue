<template>
    <div>
      <div :style="test ? 'display: block;' : 'display: none;'">
        <el-menu class="el-menu-vertical-demo " @open="handleOpen" @close="handleClose" :collapse="judefullwidth">
          <el-menu style="line-height:20px;text-align:right;font-size:40px;">
            <i :class="judefullwidth ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="LeftMenu"></i>
          </el-menu>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            <span slot="title">首頁</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            <span slot="title">關於我</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            <span slot="title">經歷</span>
          </el-menu-item>
          <el-menu-item>
            <i class="el-icon-menu"></i>
            <span slot="title">作品</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div :style="test ? 'display: none;' : 'display: block;'">
        <el-drawer
          title="我是标题"
          :visible.sync="props.drawer"
          :direction="direction"
          :before-close="handleClose">
          <span>我来啦!</span>
        </el-drawer>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    judefullwidth: {
      type: Boolean
    },
    testfullwidth: {
      type: Boolean
    },
    test: {
      type: Boolean
    },
    drawer: {
      type: Boolean
    }
  },
  data() {
    return {
      direction: 'ltr'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    LeftMenu() {
      this.$emit('CloseLeftMenu')
    },
    handleClose() {
      this.$emit('CloseDrawer')
    }
  },
  created() {
    console.log(this.props.judefullwidth)
    console.log(this.props.testfullwidth)
  },
  setup (props) {
    return { props }
  }
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
/* 新增 */
.el-menu--collapse{
    height: 100%;
}
</style>
