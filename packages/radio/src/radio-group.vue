<template>
  <div class="lee-radio-group"
    role="radiogroup"
    @keydown="handleKeydown"
  >
    <slot></slot>
  </div>
</template>
<script>
  import Emitter from '../../../src/mixins/emitter'
  const keyCode = Object.freeze({
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  })
  export default {
    name: 'LeeRadioGroup',
    componentName: 'LeeRadioGroup',
    mixins: [Emitter],
    inject: {
      leeFormItem: {
        default: ''
      }
    },
    props: {
      value: {},
      size: String,
      fill: String,
      textColor: String,
      disabled: Boolean
    },
    computed: {
      _leeFormItemSize () {
        return (this.leeFormItem || {}).leeFormItemSize
      },
      radioGroupSize () {
        return this.size || this._leeFormItemSize || (this.$ELEMENT || {}).size
      }
    },
    created() {
      this.$on('handleChange', value => {
        this.$emit('change', value);
      });
    },
    mounted() {
      // 当radioGroup没有默认选项时，第一个可以选中Tab导航
      const radios = this.$el.querySelectorAll('[type=radio]')
      const firstLabel = this.$el.querySelectorAll('[role=radio]')[0]
      if (![].some.call(radios, radio => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0
      }
    },
    methods: {
      handleKeydown(e) { // 左右上下按键 可以在radio组内切换不同选项
        const target = e.target
        const className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
        const radios = this.$el.querySelectorAll(className)
        const length = radios.length
        const index = [].indexOf.call(radios, target)
        const roleRadios = this.$el.querySelectorAll('[role=radio]')
        switch (e.keyCode) {
          case keyCode.LEFT:
          case keyCode.UP:
            e.stopPropagation()
            e.preventDefault()
            if (index === 0) {
              roleRadios[length - 1].click()
            } else {
              roleRadios[index - 1].click()
            }
            break
          case keyCode.RIGHT:
          case keyCode.DOWN:
            if (index === (length - 1)) {
              e.stopPropagation()
              e.preventDefault()
              roleRadios[0].click()
            } else {
              roleRadios[index + 1].click()
            }
            break
          default:
            break
        }
      }
    },
    watch: {
      value(value) {
        this.dispatch('LeeFormItem', 'lee.form.change', [this.value]);
      }
    }
  }
</script>
