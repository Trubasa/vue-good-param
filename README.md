# vue-good-param
该项目为商品参数编辑组件，使用vue，element-ui技术进行构建。提供商品参数的编辑功能。<br>
[demo（在源码的example目录下）](https://trubasa.github.io/vue-good-param/example/index.html)


[使用方法](https://github.com/Trubasa/doc)

该组件的数据格式可查看static目录下的myData.js

```html
<good-param
    ref="goodParam"    
    v-model="selectedList"                      商品的参数,以逗号分隔，例如:"SADF2D,ASDF3N,AZF2"
    :param-list="options"                       参数的树状列表
    @add-param-option="addParamOption"          添加属性的选项回调
    @delete-param-option="deleteParamOption"    删除属性的选项回调
    @edit-param-option="editParamOption"        编辑属性的选项回调
    @delete-param="deleteParam"                 删除属性回调
    @add-param="addParam"                       添加属性回调
    @edit-param="editParam">                    编辑属性回调
  </good-param>
```
