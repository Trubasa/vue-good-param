<template>
  <div class="good-param-option" @click="$emit('edit')">
    <span class="param_label">{{item.name}}</span>
    <span class="func_panel" v-if="isHover">
        <!--<i class="vue-plugins-icon icon-bianjiqianbixieshuru2 icon_btn" ></i>-->
        <i class="vue-plugins-icon icon-tubiao39 icon_btn" @click.stop="$emit('delete')"></i>
      </span>
  </div>
</template>

<script>
  export default {
    name: "good-param-option",
    data(){
      return {
        isHover:true,
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
.good-param-option{
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
