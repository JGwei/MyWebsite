<template>
    <div class="contact">
        <h1>還未完成</h1>
        <h2>寄信</h2>
        <div class="contact-div">
          <el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="信箱" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>

            <el-form-item label="敘述" prop="text">
              <el-input  type="textarea"  :autosize="{ minRows: 5, maxRows: 6}" v-model="ruleForm.text"></el-input>
            </el-form-item>

            <div>
              <el-button type="primary" @click="submitForm('ruleForm')">送出</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </div>
          </el-form>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        email: '',
        text: ''
      },
      rules: {
        name: [
          { required: true, message: '請輸入姓名', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '請輸入信箱', trigger: 'blur' },
          { message: '信箱格是錯誤', trigger: 'blur' }
        ],
        text: [
          { required: true, message: '請輸入敘述', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('此功能還未開發完成!')
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
<style lang="scss">
.contact{
  position: relative;
  padding: 60px;
  height: auto;

  margin-bottom: 65px;

  .contact-div{
    display: flex;
    justify-content: center;
  }
  .demo-ruleForm{
    width: 50%;
  }
}

@media screen and (max-width: 1024px){
  .contact{
    padding: 0;

    .demo-ruleForm{
      width: 100%;
    }
  }
}
</style>
