<template>
  <label :for="'radio_' + name + label">
    <input
      type="radio"
      :name="name"
      :id="'radio_' + name + label"
      :value="label"
      @change="handleChange"
      v-model="model"
      :checked="model === label"
    >
    <span>
      <slot></slot>
    </span>
  </label>
</template>
<script>
  export default {
    name: 'LeeRadio',
    props: {
      name: {
        type: String,
        default: ''
      },
      label: {
      }
    },
    computed: {
      isGroup () {
        let parent = this.$parent
        while (parent) {
          if (parent.$options.name !== 'LeeRadioGroup') {
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
