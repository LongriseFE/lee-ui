<template>
  <div class="lee-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
  import Emitter from '../../../src/mixins/emitter'
  export default {
    name: 'LeeCheckboxGroup',
    componentName: 'LeeCheckboxGroup',
    props: {
      value: {},
      disabled: Boolean,
      min: Number,
      max: Number,
      size: String,
      fill: string,
      textColor: String
    },
    computed: {
      checkboxGroupSize () {

      }
    },
    watch: {
      value(value) {
        this.dispatch('ElFormItem', 'el.form.change', [value]);
      }
    }
  }
</script>
