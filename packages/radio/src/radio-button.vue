<template>
  <label
    class="lee-radio-button"
    :for="'radio_' + name + label"
    :class="[
      size ? 'lee-radio-' + size : '',
      {'is-checked': value === label},
      {'is-disabled': isDisabled},
      {'is-focus': focus}
    ]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="value = label"
  >
    <input
      type="radio"
      :name="name"
      :id="'radio_' + name + label"
      :value="label"
      @change="handleChange"
      v-model="value"
      :checked="value === label"
      :disabled="isDisabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
    >
    <span class="lee-radio-text" :style="value === label ? activeStyle : null">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
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
      label: {},
      disabled: Boolean,
      name: String
    },
    data () {
      return {
        focus: false
      }
    },
    computed: {
      value: {
        get () {
          return this._radioGroup.value
        },
        set (value) {
          this._radioGroup.$emit('input', value)
        }
      },
      _radioGroup() {
        let parent = this.$parent;
        while (parent) {
          if (parent.$options.componentName !== 'LeeRadioGroup') {
            parent = parent.$parent;
          } else {
            return parent;
          }
        }
        return false;
      },
      activeStyle() {
        return {
          backgroundColor: this._radioGroup.fill || '',
          borderColor: this._radioGroup.fill || '',
          boxShadow: this._radioGroup.fill ? `-1px 0 0 0 ${this._radioGroup.fill}` : '',
          color: this._radioGroup.textColor || ''
        };
      },
      _leeFormItemSize() {
        return (this.leeFormItem || {}).leeFormItemSize;
      },
      size() {
        return this._radioGroup.radioGroupSize || this._leeFormItemSize || (this.$ELEMENT || {}).size;
      },
      isDisabled() {
        return this.disabled || this._radioGroup.disabled;
      },
      tabIndex() {
        return !this.isDisabled ? (this._radioGroup ? (this.value === this.label ? 0 : -1) : 0) : -1;
      }
    },
    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.dispatch('LeeRadioGroup', 'handleChange', this.value);
        });
      }
    }
  }
</script>
