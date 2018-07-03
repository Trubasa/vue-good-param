<template>
  <div class="good-param-item" @mouseover="isHover=true" @mouseout="isHover=false">
    <span class="param_label">{{item.name}}</span>
    <el-select
      :style="{width:item.width?(item.width+'px'):'180px'}"
      v-model="selectedValue"
      placeholder="请选择">
      <el-option
        v-for="item2 in item.params"
        :key="item2.id"
        :label="item2.name"
        :value="item2.id">
      </el-option>
    </el-select>
    <span class="func_panel" v-if="isHover">
        <i class="vue-plugins-icon icon-bianjiqianbixieshuru2 icon_btn" @click="$emit('edit')"></i>
        <i class="vue-plugins-icon icon-tubiao39 icon_btn" @click="$emit('delete')"></i>
      </span>
  </div>
</template>

<script>
  export default {
    name: "good-param-item",
    data(){
      return {
        isHover:false,
        selectedValue:''
      }
    },
    props:['item','value'],
    watch:{
      value(val){
        this.setSelectedValue()
      },
      selectedValue(val){
        this.$emit('input',val);
      }
    },
    mounted(){
      this.setSelectedValue();
    },
    methods: {
      setSelectedValue(){
        this.selectedValue=this.value;
      }
    }
  }
</script>

<style scoped>
.good-param-item{
  display: inline-block;
  padding: 5px;
  background: #efefef;
  margin: 5px;
  border-radius: 5px;
}
.icon_btn {
  color: #999;
  cursor: pointer;
}
.param_label {
  padding: 10px;
  font-size: 14px;
}
</style>
