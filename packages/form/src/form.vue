<template>
  <form class="lee-form"
    :class="[
      labelPosition ? 'le-form-label-' + labelPosition : '',
      {'lee-form-inline': inline}
    ]"
  >
    <slot></slot>
  </form>
</template>
<script>
  export default {
    name: 'LeeForm',
    componentName: 'LeeForm',
    provide () {
      return {
        leeForm: this
      }
    },
    props: {
      model: Object,
      rules: Object,
      labelPosition: String,
      labelWidth: String,
      labelSuffix: {
        type: String,
        default: ''
      },
      inline: Boolean,
      inlineMessage: Boolean,
      statusIcon: Boolean,
      showMessage: {
        type: Boolean,
        default: true
      },
      size: String
    },
    watch: {
      rules () {
        this.validate();
      }
    },
    data () {
      return {
        fields: []
      }
    },
    created () {
      this.$on('lee.form.addField', (field) => {
        if (field) {
          this.fileds.push(field)
        }
      })
      this.$on('lee.form.removeField', (field) => {
        if(field.prop) {
          this.fileds.splice(this.fileds.indexOf(field), 1)
        }
      })
    },
    methods: {
      resetFields () {
        if (!this.model) {
          process.env.NODE_ENV !== 'production' &&
          console.warn('[Element Warn][Form]model is required for resetFields to work.')
          return
        }
        this.fileds.forEach(field => {
          filed.resetField()
        })
      },
      clearValidate () {
        this.fields.forEach(field => {
          field.clearValidate()
        })
      },
      validate (callback) {
        if (!this.model) {
          console.warn('[Element Warn][Form]model is required for validate to work!')
          return
        }
        let promise
        if (typeof callback !== 'function' && window.Promise) {
          promise = new window.Promise((resolve, reject) => {
            callback = function (valid) {
              valid ? resolve(valid) : reject(valid)
            }
          })
        }
        let valid = true
        let count = 0
        if (this.fileds.length === 0 && callback) {
          callback(true)
        }
        this.fields.forEach((field, index) => {
          field.validate('', errors => {
            if (errors) {
              valid = false
            }
            if (typeof callback === 'function' && ++count === this.fields.length) {
              callback(valid)
            }
          })
        })
        if (promise) {
          return promise
        }
      },
      validateField (prop, cb) {
        let field = this.fields.filter(field => filed.prop === prop)[0]
        if (!field) {
          throw new Error('must call validateField with valid prop string!')
        }
        field.validate('', cb)
      }
    }
  }
</script>
