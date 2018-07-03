<template>
  <div class="good-param" >
    <good-param-item  v-for="item,index in paramList"
      v-model="selectedList[index]"
      :item="item"
      @edit="editParam(item,index)"
      @delete="deleteParam(item,index)">
    </good-param-item>

    <div style="padding: 5px;">
      <el-button type="primary" @click="$refs.addGoodParam.show()">新增参数</el-button>
    </div>

    <add-good-param ref="addGoodParam"
                    @add-param="$emit('add-param',$event)">

    </add-good-param>
    <edit-good-param ref="editGoodParam"
                     @add-param-option="$emit('add-param-option',$event)"
                     @delete-param-option="$emit('delete-param-option',$event)"
                     @edit-param-option="$emit('edit-param-option',$event)"
                    @edit-param="$emit('edit-param',$event)">
    </edit-good-param>



  </div>
</template>

<script>
  export default {
    name: "good-param",
    data() {
      return {
        selectedList: [],
        isHover: false,
      }
    },
    props: ['paramList', 'value'],
    watch: {
      value(val) {
        this.setSelectedList(val);
      },
      paramList(val){
        this.setSelectedList();
      },
      selectedList(val) {
        this.$emit('input', val.join(','));
      }
    },
    computed: {},
    mounted() {
      //console.log('value', this.value);
      this.setSelectedList();
    },
    methods: {
      setSelectedList() {
        var that = this;
        //console.log('setSelectdList');
        //console.log(that.paramList);
        if(!that.paramList){
          console.error('paramList 错误');
          return ;
        }

        if (that.value) {
          var valueAry = that.value.split(',');
          //console.log(that.paramList,);
          that.paramList.forEach((optionsItem, optionsIndex) => {
            //console.log('forEach one');
            valueAry.forEach((valueItem) => {
              //console.log('forEach two');
              optionsItem.params.forEach((paramItem) => {
                //console.log('forEach three');
                if (paramItem.id == valueItem) {
                  that.$set(that.selectedList, optionsIndex, valueItem)
                  // that.selectedList[optionsIndex]=valueItem;
                }
              })
            })
          });
        } else {
          that.selectedList = [];
        }
      },
      editParam(obj) {
        this.$refs.editGoodParam.show(obj);
      },
      deleteParam(obj,index) {
        var that = this;
        this.$confirm('确定删除该参数?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$emit('delete-param', {
            data: obj,
            finish: function () {
              /*obj.params.forEach((paramsItem) => {
                that.selectedList.forEach((selectedItem, selectedIndex) => {
                  if (paramsItem.id == selectedItem) {
                    that.selectedList.splice(selectedIndex, 1);
                  }
                })
              })*/
            }
          })

        }).catch(() => {
          /*this.$message({
            type: 'info',
            message: '已取消删除'
          });*/
        });
      }
    }
  }
</script>

<style scoped>



</style>
<style>

</style>
