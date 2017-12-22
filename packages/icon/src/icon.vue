<template>
  <span
    :class="'lee-icon icon-' + name"
    :style="'font-size:' + size + 'px;color:' + color"
    @click="$emit('click')"
  >
  </span>
</template>
<script>
  export default {
    name: 'LeeIcon',
    componentName: 'LeeIcon',
    props: {
      name: String,
      size: {
        type: String,
        default: '24'
      },
      color: String
    }
  }
</script>
