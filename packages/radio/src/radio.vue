<template>
  <label
    class="lee-radio"
    :for="'radio_' + name + label"
    :class="[
      border && radioSize ? 'lee-radio-' + radioSize : '',
      {'is-checked': model === label},
      {'is-disabled': isDisabled},
      { 'is-focus': focus },
      { 'is-bordered': border },
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    @keydown.space.stop.prevent="model = label"
  >
    <span
      class="lee-radio-circle"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <input
        type="radio"
        :name="name"
        :id="'radio_' + name + label"
        :value="label"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        v-model="model"
        :checked="model === label"
        :disabled="isDisabled"
        tabindex="-1"
      >
    </span>
    <span class="lee-radio-text">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from '../../../src/mixins/emitter'
  export default {
    name: 'LeeRadio',
    componentName: 'LeeRadio',
    mixins: [Emitter],
    inject: {
      leeFormItem: {
        default: ''
      }
    },
    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String,
      border: Boolean,
      size: String
    },
    data() {
      return {
        focus: false
      };
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
      _leeFormItemSize() {
        return (this.leeFormItem || {}).leeFormItemSize;
      },
      radioSize () {
        const temRadioSize = this.size || this._leeFormItemSize || (this.$ELEMENT || {}).size
        return this.isGroup
          ? this._radioGroup.radioGroupSize || temRadioSize
          : temRadioSize
      },
      isDisabled () {
        return this.isGroup
          ? this._radioGroup.disabled || this.disabled
          : this.disabled
      },
      tabIndex () {
        return !this.isDisabled ? (this.isGroup ? (this.model === this.label ? 0 : -1) : 0) : -1
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
