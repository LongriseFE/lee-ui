<template>
  <label
    class="lee-radio-button"
    :for="'radio_' + name + label"
    :class="[
      size ? 'lee-radio-' + size : '',
      {'is-checked': model === label},
      {'is-disabled': isDisabled}
    ]"
  >
    <input
      type="radio"
      :name="name"
      :id="'radio_' + name + label"
      :value="label"
      @change="handleChange"
      v-model="model"
      :checked="model === label"
      :disabled="isDisabled"
    >
    <span class="lee-radio-text">
      <slot></slot>
    </span>
  </label>
</template>
<script>
  import Emitter from '../../../src/mixins/emitter'
  export default {
    name: 'LeeRadioButton',
    componentName: 'LeeRadioButton',
    mixins: [Emitter],
    props: {
      name: {
        type: String,
        default: ''
      },
      label: {
      },
      value: {},
      size: {},
      disabled: Boolean
    },
    computed: {
      isGroup () {
        let parent = this.$parent
        while (parent) {
          if (parent.$options.componentName !== 'LeeRadioGroup') {
            parent = parent.$parent
          } else {
            this._radioGroup = parent
            return true
          }
        }
        return false
      },
      model: {
        get () {
          return this.isGroup ? this._radioGroup.value : this.value
        },
        set (val) {
          if (this.isGroup) {
            this.dispatch('LeeRadioGroup', 'input', [val])
          } else {
            this.$emit('input', val)
          }
        }
      },
      isDisabled () {
        return this.isGroup
          ? this._radioGroup.disabled || this.disabled
          : this.disabled
      }
    },
    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.$emit('change', this.model);
          this.isGroup && this.dispatch('LeeRadioGroup', 'handleChange', this.model);
        })
      }
    }
  }
</script>
