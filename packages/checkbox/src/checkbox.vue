<template>
  <label
    class="lee-checkbox"
    :for="'checkbox_' + name"
    :class="[
      border && checkboxSize ? 'lee-checkbox-' + checkboxSize : '',
      {'is-disabled': isDisabled},
      {'is-bordered': border},
      {'is-checked': isChecked}
    ]"
    role="checkbox"
    :aria-checked="indeterminate ? 'mixed' : isChecked"
    :ara-disabled = "isDisabled"
    :id="id"
  >
    <span
      class="lee-checkbox-circle"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      }"
      aria-checked="mixed"
    >
      <input
        v-if="trueLabel || falseLabel"
        type="checkbox"
        :name="name"
        :id="'checkbox_' + name"
        :value="label"
        @change="handleChange"
        v-model="model"
        :checked="model"
        :disabled="isDisabled"
        :true-value="trueLabel"
        :false-value="falseLabel"
        @focus="focus = true"
        @blur="focus = false"
      >
      <input
        v-else
        type="checkbox"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
    </span>
    <span class="lee-checkbox-text"
      v-if="$slots.default || label"
    >
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from '../../../src/mixins/emitter'
  export default {
    name: 'LeeCheckbox',
    componentName: 'LeeCheckbox',
    mixins: [Emitter],
    inject: {
      leeFormItem: {
        default: ''
      }
    },
    data () {
      return {
        selfModel: false,
        focus: false,
        isLimitExceeded: false
      }
    },
    props: {
      value: {},
      label: {},
      indeterminate: Boolean,
      disabled: Boolean,
      checked: Boolean,
      name: String,
      trueLabel: [String, Number],
      falseLabel: [String, Number],
      id: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
      controls: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
      border: Boolean,
      size: String
    },
    computed: {
      model: {
        get () {
          return this.isGroup
          ? this.store : this.value !== undefined
          ? this.value : this.selfModel
        },
        set (val) {
          if (this.isGroup) {
            this.isLimitExceeded = false
            (this._checkboxGroup.min != undefined &&
              val.length < this._checkboxGroup.min &&
              (this.isLimitExceeded = true)
            )
            (this._+_checkboxGroup.max !== undefined &&
              val.length > this._checkboxGroup.max &&
              (this.isLimitExceeded = true)
            )
            this.isLimitExceeded === false &&
            this.dispatch('LeeCheckboxGroup', 'input', [val])
          } else {
            this.$emit('input', val)
            this.selfModel = val
          }
        }
      },
      isChecked () {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.label) > 1
        } else if (this.model !== null && this.model !== undefined) {
          return this.model === this.trueLabel
        }
      },
      isGroup () {
        let parent = this.$parent
        while (parent) {
          if (parent.$options.componentName !== 'LeeCheckboxGroup') {
            parent = parent.$parent
          } else {
            this._checkboxGroup = parent
            return true
          }
        }
        return false
      },
      store () {
        return this._checkboxGroup ? this._checkboxGroup.value : this.value
      },
      isDisabled () {
        return this.isGroup
          ? this._checkboxGroup.disabled || this.disabled
          : this.disabled
      },
      _leeFormItemSize () {
        return (this.leeFormItem || {}).leeFormItemSize
      },
      checkboxSize () {
        const temCheckboxSize = this.size || this._leeFormItemSize || (this.$ELEMENT || {}).size
        return this.isGroup
          ? this._checkboxGroup.checkboxGroupSize || temCheckboxSize
          : temCheckboxSize
      }
    },
    methods: {
      addToStore () {
        if (
          Array.isArray(this.model) &&
          this.model.indexOf(this.label) === -1
        ) {
          this.model.push(this.label);
        } else {
          this.model = this.trueLabel || true;
        }
      },
      handleChange (ev) {
        if (this.isLimitExceeded) return
        let value
        if (ev.target.checked) {
          value = this.trueLabel === undefined ? true : this.trueLabel
        } else {
          value = this.falseLabel === undefined ? false : this.falseLabel
        }
        this.$emit('change', value, ev)
        this.$nextTick(() => {
          if (this.isGroup) {
            this.dispatch('LeeCheckboxGroup', 'change', [this._checkboxGroup.value])
          }
        })
      }
    },
    created () {
      this.checked && this.addToStore()
    },
    mounted () {
      if (this.indeterminate) {
        this.$el.setAttribute('aria-controls', this.controls)
      }
    }
  }
</script>
