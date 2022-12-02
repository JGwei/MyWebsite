<template>
    <div>
        <el-backtop :bottom="50" :right="12">
            <div class="image">
                <!-- <i class="el-icon-top"></i> -->
                <el-image style="width: 50px; height: 50px;border-radius: 50%;" :src="url" :fit="fit"></el-image>
            </div>
        </el-backtop>
    </div>
</template>

<script>
export default {
  data() {
    return {
      url: require('@/assets/1.gif'),
      fit: 'cover'
    }
  }
}
</script>

<style>
</style>
