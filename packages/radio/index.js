/*
 * @Author: swimly
 * @Date: 2017-12-18 13:41:20
 * @Last Modified by: swimly
 * @Last Modified time: 2017-12-18 13:42:04
 */
import LeeRadio from './src/radio'
LeeRadio.install = function (Vue) {
  Vue.component(LeeRadio.name, LeeRadio)
}
export default LeeRadio
