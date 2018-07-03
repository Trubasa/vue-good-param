<template>
  <div class="add-good-param">
    <el-dialog
      title="添加商品参数"
      :visible.sync="dialogVisible"
      :width="'400px'">
      <div >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="参数名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="选择框宽度" prop="width">
            <el-input v-model="ruleForm.width" type="number" min="40" max="300" step="10" style="width: 180px;"></el-input>
            <el-tooltip class="item" effect="dark" content="进行参数选择时，选择框的宽度" placement="right">
              <i class="vue-plugins-icon icon-wenhao"></i>
            </el-tooltip>
          </el-form-item>
          <!--<el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>-->
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "add-good-param",
    data() {
      return {
        paramsInput:'',
        dialogVisible: false,
        ruleForm: {
          name: '',
          width:180
        },
        rules: {
          name: [
            { required: true, message: '请输入参数名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    watch:{
      dialogVisible(val){
        if(!val){
          this.resetForm('ruleForm');
        }
      }
    },
    mounted() {

    },
    methods: {
      show(){
        this.dialogVisible=true;
      },
      submitForm(formName) {
        var that=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            that.$emit('add-param',{
              data:that.ruleForm,
              finish:function () {
                that.dialogVisible=false;
              }
            });

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    }
  }
</script>

<style scoped>

</style>
