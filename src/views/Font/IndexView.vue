<template>
  <div class="home">
    <div class="home-card">
      <h1>關於我</h1>
      <div class="about">
        <div class="about-div">
          <el-avatar class="about-img" :src="img"></el-avatar>
        </div>

        <div class="about-card">
          <el-card>
            <div>
              <div>
                <span>
                  我是Wei，來自台灣的網頁開發菜鳥
                  現在正在努力的學習網頁開發相關技術
                </span>
              </div>
              <div>
                <div class="about-card-span">
                  <span>Vue </span>
                  <span>40% </span>
                </div>
                <el-slider v-model="Vue" :show-tooltip="false" disabled></el-slider>
              </div>
              <div>
                <div class="about-card-span">
                  <span>FastApi </span>
                  <span>20% </span>
                </div>
                <el-slider v-model="FastApi" :show-tooltip="false" disabled></el-slider>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>

    <div class="home-card">
      <h1>技能</h1>
      <div>
        <h3>前端技術</h3>
        <el-row :gutter="12">
          <el-col class="col-div" :span="8">
            <el-card shadow="always">
              <div style="display: flex;justify-content: space-between;">
                <span>Vue</span>
                <span>40%</span>
              </div>
              <el-slider v-model="Vue" :show-tooltip="false" disabled></el-slider>
              <el-button type="text" class="button"> <a href="https://v2.cn.vuejs.org/index.html" class="link" target="_blank">前往</a> </el-button>
            </el-card>
          </el-col>
          <el-col class="col-div" :span="8">
            <el-card shadow="always">
              <div style="display: flex;justify-content: space-between;">
                <span>Flask</span>
                <span>20%</span>
              </div>
              <el-slider v-model="Flask" :show-tooltip="false" disabled></el-slider>
              <el-button type="text" class="button"> <a href="https://flask.palletsprojects.com/en/2.2.x/" class="link" target="_blank">前往</a> </el-button>
            </el-card>
          </el-col>
          <el-col class="col-div" :span="8">
            <el-card shadow="always">
              <div style="display: flex;justify-content: space-between;">
                <span>Django</span>
                <span>20%</span>
              </div>
              <el-slider v-model="Django" :show-tooltip="false" disabled></el-slider>
              <el-button type="text" class="button"> <a href="https://docs.djangoproject.com/en/4.1/" class="link" target="_blank">前往</a> </el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div>
        <h3>後端技術</h3>
        <el-row :gutter="12">
          <el-col class="col-div" :span="8">
            <el-card shadow="always">
              <div style="display: flex;justify-content: space-between;">
                <span>FastApi</span>
                <span>20%</span>
              </div>
              <el-slider v-model="FastApi" :show-tooltip="false" disabled></el-slider>
              <el-button type="text" class="button"> <a href="https://fastapi.tiangolo.com/zh/" class="link" target="_blank">前往</a> </el-button>
            </el-card>
          </el-col>
          <el-col class="col-div" :span="8">
            <el-card shadow="always">
              <div style="display: flex;justify-content: space-between;">
                <span>Laravel 8</span>
                <span>30%</span>
              </div>
              <el-slider v-model="Laravel8" :show-tooltip="false" disabled></el-slider>
              <el-button type="text" class="button"> <a href="https://laravel.tw/" class="link" target="_blank">前往</a> </el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="home-card">
      <h1 class="work">工作經驗</h1>
      <div class="work-div">
        <div class="work-div-div">
          <h3>2022</h3>
          <el-timeline>
            <el-timeline-item timestamp="2022/07/01~2022/09/30" placement="top">
              <el-card>
                <h4>暑期實習</h4>
                <p>Wei 提交于 2022/11/15</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2022/01/01~2022/06/30" placement="top">
              <el-card>
                <h4>校內工讀</h4>
                <p>Wei 提交于 2022/11/15</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
        <div class="work-div-div">
          <h3>2021</h3>
          <el-timeline>
            <el-timeline-item timestamp="2021/07/01~2022/12/31" placement="top">
              <el-card>
                <h4>校內工讀</h4>
                <p>Wei 提交于 2022/11/15</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      Vue: 40,
      Flask: 20,
      Django: 20,
      FastApi: 20,
      Laravel8: 30,

      img: require('@/assets/頭像.jpg')
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  position: relative;
  padding: 60px;
  height: auto;
}
h1,h2,h3,h4{
  margin: 0;
  font-size: 28px;
}
h3{
  text-align: center;
}

.home-card{
  margin-bottom: 20px;
  text-align: left;
  border-radius: 0.75rem;
  padding: 5px 15px;
}
.about{
  display: flex;
  align-items: center;
  justify-content: space-around;

  .about-div{
    width:50%;
    text-align:center;
  }
  .about-img{
    width:300px;
    height:300px;
  }

  .about-card{
    width: 50%;
  }

  .about-card-span{
    display: flex; justify-content: space-between;align-items: center;
  }

}
.work-div{
  display: flex;align-items: center;padding: 0 15px;border-radius:0.75rem
}
.work-div-div{
  width: 50%;
}

.email{
  .email-div{
    display: flex;justify-content: center;
  }
  .email-form{
    width: 50%;
  }
}
.col-div{
  margin: 10px 0;
}

@media screen and (max-width:1024px){
  .home{
    padding: 0px;
  }

  .home-card{
    padding: 0;
  }

  .about{
    display: block;

    .about-div, .about-card{
      width: 100%;
    }
    .about-img{
    }

    .about-card-span{
    }
  }

  .el-col-8{
    width: 100%;
  }

  .work-div{
    display: block;
  }
  .work-div-div{
    width: 100%;
  }
  .el-timeline{
    padding: 0;
  }
}
.button {
  padding: 0;
  float: right;
}

.link{
  color:cornflowerblue;
}

</style>

<style>
.el-slider__button-wrapper .el-tooltip, .el-slider__button-wrapper::after{
  display: none !important;
}
.el-slider__runway.disabled .el-slider__bar{
  background: rgb(7, 7, 7)!important;
}
</style>
