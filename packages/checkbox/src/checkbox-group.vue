<script>
  import Emitter from '../../../src/mixins/emitter';

  export default {
    name: 'LeeCheckboxGroup',

    componentName: 'LeeCheckboxGroup',

    mixins: [Emitter],

    inject: {
      leeFormItem: {
        default: ''
      }
    },

    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: String,
      textColor: String
    },

    computed: {
      _leeFormItemSize() {
        return (this.leeFormItem || {}).leeFormItemSize;
      },
      checkboxGroupSize() {
        return this.size || this._leeFormItemSize || (this.$ELEMENT || {}).size;
      }
    },

    watch: {
      value(value) {
        this.dispatch('LeeFormItem', 'lee.form.change', [value]);
      }
    }
  };
</script>

<template>
  <div class="lee-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
