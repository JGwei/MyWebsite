<template>
  <div class="home">
    <div class="home-card">
      <h1>關於我</h1>
      <div class="about">
        <div class="about-div">
          <el-avatar class="about-img" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>

        <div class="about-card">
          <el-card>
            <div>
              <div>
                <span>
                  我是簡光偉，來自台灣高雄市的網頁開發菜鳥
                  現在正在努力的學習前端相關技術
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
        <el-row :gutter="12">
          <el-col class="col-div" :span="8">
            <el-card shadow="always">
              <span>Vue</span>
            </el-card>
          </el-col>
          <el-col class="col-div" :span="8">
            <el-card shadow="always">
              <span>FastApi</span>
            </el-card>
          </el-col>
          <el-col class="col-div" :span="8">
            <el-card shadow="always">
              <span>Laravel 8</span>
            </el-card>
          </el-col>
          <el-col class="col-div" :span="8">
            <el-card shadow="always">
              <span>Flask</span>
            </el-card>
          </el-col>
          <el-col class="col-div" :span="8">
            <el-card shadow="always">
              <span>Django</span>
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
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
        <div class="work-div-div">
          <h3>2021</h3>
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>

    <div class="home-card">
      <h1 class="email">寄信</h1>
      <div class="email-div">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm email-form">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-form-item prop="date2">
                <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式" prop="desc">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Vue: 40,
      FastApi: 20,
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
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
  padding: 60px;
}
h1,h2{
  margin: 0;
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
    width:200px;
    height:200px;
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
    padding: 20px;
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

</style>

<style>
.el-slider__button-wrapper .el-tooltip, .el-slider__button-wrapper::after{
  display: none !important;
}
.el-slider__runway.disabled .el-slider__bar{
  background: rgb(7, 7, 7)!important;
}
</style>
