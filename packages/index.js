/*
 * @Author: swimly
 * @Date: 2017-12-14 13:55:31
 * @Last Modified by: swimly
 * @Last Modified time: 2017-12-25 15:07:54
 */
import LeeButton from './button/index'
import LeeButtonGroup from './button-group/index'
import LeeRow from './row/index'
import LeeCol from './col/index'
import LeeRadio from './radio/index'
import LeeRadioGroup from './radio-group/index'
import LeeRadioButton from './radio-button/index'
import LeeCheckbox from './checkbox/index'
import LeeCheckboxGroup from './checkbox-group/index'
import LeeForm from './form/index'
import LeeFormItem from './form-item/index'
import LeeCheckboxButton from './checkbox-button/index'
import LeeIcon from './icon/index'
import LeeInput from './input/index'
const components = [
  LeeButton,
  LeeButtonGroup,
  LeeRow,
  LeeCol,
  LeeRadio,
  LeeRadioGroup,
  LeeRadioButton,
  LeeCheckbox,
  LeeCheckboxGroup,
  LeeForm,
  LeeFormItem,
  LeeCheckboxButton,
  LeeIcon,
  LeeInput
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
  LeeButton,
  LeeButtonGroup,
  LeeRow,
  LeeCol,
  LeeRadio,
  LeeRadioGroup,
  LeeRadioButton,
  LeeCheckbox,
  LeeCheckboxGroup,
  LeeForm,
  LeeFormItem,
  LeeCheckboxButton,
  LeeIcon,
  LeeInput
}
