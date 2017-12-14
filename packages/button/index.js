/*
 * @Author: swimly
 * @Date: 2017-12-14 13:53:54
 * @Last Modified by: swimly
 * @Last Modified time: 2017-12-14 14:02:18
 */
import LeeButton from './src/button'
LeeButton.install = function (Vue) {
  Vue.component(LeeButton.name, LeeButton)
}
export default LeeButton
