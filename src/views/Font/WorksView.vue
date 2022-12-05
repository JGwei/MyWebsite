<template>
    <div class="Works">
      <h1>還未完成</h1>
      <div class="website-div" v-for="(item, index) in setData" :key="index">
        <h1> {{ item.year }} </h1>
        <div class="website">
          <el-row :gutter="12">
              <el-col :span="8" v-for="(item, index) in item.data" :key="index">
                <el-tooltip :content="'點下前往   '+item.url" placement="top">
                <a :href="item.url" target="_blank">
                  <el-card shadow="hover">
                    <div style="padding: 14px;">
                      <div>
                        <h2>{{ item.name }}</h2>
                      </div>
                      <!-- <div class="bottom clearfix">
                        <el-button type="text" class="button"> <a :href="item.url" target="_blank"> 前往 </a> </el-button>
                      </div> -->
                    </div>
                  </el-card>
                </a>
                </el-tooltip>
              </el-col>
          </el-row>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      setData:
      [
        {
          year: '2022',
          data:
          [
            {
              icon: 'icon.png',
              name: '基於影像辨識之竊盜行為偵測平台',
              url: 'https://www.google.com/'
            },
            {
              icon: '',
              name: '個人網站',
              url: 'https://jgwei.github.io/React-MyWebsit/'
            }
          ]
        },
        {
          year: '2021',
          data:
          [
            {
              icon: '',
              name: '測試',
              url: 'https://www.google.com/'
            }
          ]
        },
        {
          year: '2020',
          data:
          [
            {
              icon: '',
              name: '測試',
              url: 'https://www.google.com/'
            }
          ]
        }
      ]
    }
  },
  methods: {
  }
}

</script>
<style lang="scss" scoped>
h2{
  margin: 0;
}
.Works{
  position: relative;
  padding: 60px;
  height: auto;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
.el-col-8{
  margin: 10px 0;
}

@media screen and (max-width: 1024px){
  .Works{
    padding: 0px;
  }
  .el-col-8{
    width: 100%;
  }
}
</style>
