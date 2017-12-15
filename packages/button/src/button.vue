<template>
  <button
    @click="$emit('click')"
    class="lee-button"
    :disabled="disabled"
    :class="[
    'lee-button-'+type,
    {'is-plain': plain,
    'is-disabled': disabled,
    'is-loading': loading,
    'is-round': round},
    'lee-button-size-'+size
    ]"
  >
    <i v-if="icon !== ''" :class="'iconfont ' + icon"></i>
    <span v-if="loading" :class="'iconfont icon-refresh'"></span>
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'LeeButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean,
      loading: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
