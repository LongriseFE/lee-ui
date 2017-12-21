<script>
export default {
  data () {
    return {
      form: {
        sex: 0
      }
    }
  }
}
</script>
# Form表单
由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
## 典型表单
包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。
<div class="demo-block">
  {{form}}
  <lee-form ref="form" :model="form">
    <lee-form-item>
      <span slot="label">性别</span>
      <lee-radio-group v-model="form.sex">
        <lee-radio :label="0">男</lee-radio>
        <lee-radio :label="1">女</lee-radio>
      </lee-radio-group>
    </lee-form-item>
    <lee-form-item>
      <span slot="label">爱好</span>
      <lee-checkbox-group v-model="form.sex">
        <lee-checkbox>男</lee-checkbox>
        <lee-checkbox>女</lee-checkbox>
      </lee-checkbox-group>
    </lee-form-item>
    <lee-form-item>
      <span slot="label">你好</span>
      <lee-button>按钮</lee-button>
    </lee-form-item>
  </lee-form>
</div>
