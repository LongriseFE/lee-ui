/*
 * @Author: swimly
 * @Date: 2017-12-14 13:55:31
 * @Last Modified by: swimly
 * @Last Modified time: 2017-12-14 14:04:56
 */
import LeeButton from './button/index'
const components = [
  LeeButton
]
const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  LeeButton
}
