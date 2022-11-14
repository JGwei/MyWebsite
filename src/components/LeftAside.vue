<template>
    <div>
      <div :style="test ? 'display: block;' : 'display: none;'">
        <el-menu class="el-menu-vertical-demo " @open="handleOpen" @close="handleClose" :collapse="judefullwidth">
          <el-menu style="line-height:20px;text-align:right;font-size:40px;">
            <i :class="judefullwidth ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="LeftMenu"></i>
          </el-menu>
          <router-link to="/">
            <el-menu-item>
              <i class="el-icon-s-home"></i>
              <span slot="title">首頁</span>
            </el-menu-item>
          </router-link>

          <router-link to="/Works">
          <el-menu-item>
              <i class="el-icon-paperclip"></i>
              <span slot="title">作品</span>
            </el-menu-item>
          </router-link>

          <router-link to="/ContactMe">
            <el-menu-item>
              <i class="el-icon-chat-dot-round"></i>
              <span slot="title">聯絡我</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </div>

      <div :style="test ? 'display: none;' : 'display: block;'">
        <el-drawer
          :visible.sync="props.drawer"
          :direction="direction"
          size="100%"
        >
          <el-menu>
            <router-link to="/" >
              <el-menu-item @click="handleClose">
                <i class="el-icon-s-home"></i>
                <span slot="title">首頁</span>
              </el-menu-item>
            </router-link>

            <router-link to="/Works" >
              <el-menu-item @click="handleClose">
                <i class="el-icon-paperclip"></i>
                <span slot="title">作品</span>
              </el-menu-item>
            </router-link>

            <router-link to="/ContactMe" >
              <el-menu-item @click="handleClose">
                <i class="el-icon-chat-dot-round"></i>
                <span slot="title">聯絡我</span>
              </el-menu-item>
            </router-link>
          </el-menu>
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
  },
  setup (props) {
    return { props }
  }
}
</script>
<style scoped>
.el-menu-item{
  font-size: 24px;
}
</style>
<style lang="scss">
.el-menu-item.is-active{
  color: black !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/* 新增 */
.el-menu--collapse{
  height: 100%;
}
</style>
