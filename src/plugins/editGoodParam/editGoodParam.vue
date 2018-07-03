<template>
  <div class="edit-good-param">
    <el-dialog
      title="编辑商品参数"
      :visible.sync="dialogVisible"
      :width="'400px'">
      <div >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="参数名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="选择框宽度" prop="width">
            <el-input v-model="ruleForm.width" type="number" style="width: 180px;"></el-input>
            <el-tooltip class="item" effect="dark" content="进行参数选择时，选择框的宽度" placement="right">
              <i class="vue-plugins-icon icon-wenhao"></i>
            </el-tooltip>
          </el-form-item>
          <el-form-item label="参数选项" prop="params">
            <el-input v-model="paramOptionInput" style="width: 180px;" min="40" max="300" step="10"></el-input>
            <el-button type="primary" @click="addParamOption">添加</el-button>
            <div>
              <good-param-option
                v-for="item,index in ruleForm.params"
                :item="item"
                @edit="editParamsOption(item,index)"
                @delete="deleteParamsOption(item,index)"
              ></good-param-option>
            </div>
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
    name: "edit-good-param",
    data() {
      return {
        paramOptionInput:'',
        dialogVisible: false,
        ruleForm: {
          name: '',
          width:180,
          params:[]
        },
        rules: {
          name: [
            { required: true, message: '请输入参数名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
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
      addParamOption(){
        var that=this;
        if(!this.paramOptionInput){
          this.$message.error('请输入参数选项');
          return;
        }
        this.$emit('add-param-option',{
          data:{
            target:that.ruleForm,
            name:that.paramOptionInput
          },
          finish:function () {
            that.paramOptionInput='';
          }
        })
      },
      editParamsOption(obj,index){
        this.$prompt('在下面输入新的名称，原来的选项为：'+obj.name, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^[\s\S]*.*[^\s][\s\S]*$/,
          inputErrorMessage: '不能为空'
        }).then(({ value }) => {
          this.$emit('edit-param-option', {
            data: obj,
            finish: function () {
              obj.name=value;
            }
          })

        }).catch(() => {
          /*this.$message({
            type: 'info',
            message: '取消输入'
          });*/
        });
      },
      deleteParamsOption(obj,index){
        console.log(index);
        var that = this;
        this.$confirm('确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$emit('delete-param-option', {
            data: obj,
            finish: function () {
              that.ruleForm.params.splice(index,1);
            }
          })

        }).catch(() => {
          /*this.$message({
            type: 'info',
            message: '已取消删除'
          });*/
        });
      },
      show(obj){
        this.ruleForm=obj;
        this.dialogVisible=true;
      },
      submitForm(formName) {
        var that=this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            that.$emit('edit-param',{
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
