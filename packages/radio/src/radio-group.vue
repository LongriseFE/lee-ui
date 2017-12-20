<template>
  <div class="lee-radio-group">
    <slot></slot>
  </div>
</template>
<script>
  import Emitter from '../../../src/mixins/emitter'
  export default {
    name: 'LeeRadioGroup',
    componentName: 'LeeRadioGroup',
    mixins: [Emitter],
    props: {
      value: {},
      disabled: Boolean,
      fill: String
    },
    created() {
      this.$on('handleChange', value => {
        this.$emit('change', value);
      });
    },
    watch: {
      value(value) {
        this.dispatch('LeeRadio', 'handleChange', [this.value]);
      }
    }
  }
</script>
