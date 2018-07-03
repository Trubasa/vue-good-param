<template>
  <div id="app">
    <good-param
      v-model="selectedList"
      :param-list="options"
      @add-param-option="addParamOption"
      @delete-param-option="deleteParamOption"
      @edit-param-option="editParamOption"
      @delete-param="deleteParam"
      @add-param="addParam"
      @edit-param="editParam">
    </good-param>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      options:[],
      selectedList:'2-3,1-1'
    }
  },
  mounted:function () {
    this.options=myData.paramList
  },
  methods:{

    addParamOption(res){
      res.data.target.params.push({
        id:new Date().getTime(),
        name:res.data.name
      })
      //this.$message.success('添加成功');
      res.finish(); //添加成功后，关闭窗口
    },
    editParamOption(res){
      res.finish();
    },
    deleteParamOption(res){

      res.finish();

    },
    editParam(res){
      console.log(res.data);

      this.options=myData.paramList2;

      res.finish();
    },
    deleteParam(res){
      console.log(res);
      var deleteIndex='';
      this.options.forEach(function (ele,index) {
        if(res.data.id==ele.id){
          deleteIndex=index
        }
      });
      if(deleteIndex!==''){
        this.options.splice(deleteIndex,1)
      }

      //this.$message.success('删除成功');
      res.finish();
    },
    addParam(res){
      console.log(res);
      this.options.push({
        id:new Date().getTime(),
        name:res.data.name,
        width:res.data.width,
        params:[]
      });
      //this.$message.success('添加成功');
      res.finish(); //添加成功后，关闭窗口
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
}

</style>
