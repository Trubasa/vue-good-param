/**
 * Created by Trubasa 1141521502@qq.com on 2018/6/30.
 */
import '../static/iconfont/iconfont.css'
import '../static/common/common.css'


import module from './plugins/module'
import goodParam from './plugins/goodParam/goodParam'
import addGoodParam from './plugins/addGoodParam/addGoodParam'
import editGoodParam from './plugins/editGoodParam/editGoodParam'
import goodParamOption from './plugins/editGoodParam/components/goodParamOption'
import goodParamItem from './plugins/goodParam/components/goodParamItem'



const plugins={
  install(Vue, options) {
    Vue.component(module.name, module)
    Vue.component(goodParam.name, goodParam)
    Vue.component(addGoodParam.name, addGoodParam)
    Vue.component(editGoodParam.name, editGoodParam)
    Vue.component(goodParamOption.name, goodParamOption)
    Vue.component(goodParamItem.name, goodParamItem)
  }
}

if(typeof window !=='undefined' && window.Vue){
  window.Vue.use(plugins);
}

export default plugins
