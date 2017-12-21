<template>
  <label
    class="lee-checkbox"
    :for="'checkbox_' + name"
    :class="{
      'is-checked': model,
      'is-disabled': isDisabled
    }"
  >
    <span
      class="lee-checkbox-circle"
    >
      <input
        type="checkbox"
        :name="name"
        :id="'checkbox_' + name"
        :value="label"
        @change="handleChange"
        v-model="model"
        :checked="model"
        :disabled="isDisabled"
      >
    </span>
    <span class="lee-checkbox-text">
      <slot></slot>
    </span>
  </label>
</template>
<script>
  import Emitter from '../../../src/mixins/emitter'
  export default {
    name: 'LeeCheckbox',
    componentName: 'LeeCheckbox',
    mixins: [Emitter],
    props: {
      name: {
        type: String,
        default: ''
      },
      label: {
      },
      value: {},
      disabled: Boolean
    },
    computed: {
      isGroup () {
        let parent = this.$parent
        while (parent) {
          if (parent.$options.componentName !== 'LeecheckboxGroup') {
            parent = parent.$parent
          } else {
            this._checkboxGroup = parent
            return true
          }
        }
        return false
      },
      model: {
        get () {
          return this.isGroup ? this._checkboxGroup.value : this.value
        },
        set (val) {
          if (this.isGroup) {
            this.dispatch('LeecheckboxGroup', 'input', [val])
          } else {
            this.$emit('input', val)
          }
        }
      },
      isDisabled () {
        return this.isGroup
          ? this._checkboxGroup.disabled || this.disabled
          : this.disabled
      }
    },
    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.$emit('change', this.model);
          this.isGroup && this.dispatch('LeecheckboxGroup', 'handleChange', this.model);
        })
      }
    }
  }
</script>
