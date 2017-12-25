
<script>
export default {
  data() {
    return {
      input: '',
      input1: ''
    }
  }
}
</script>
# input输入框
通过鼠标或键盘输入字符
## 基础用法
<div class="demo-block">
  <lee-input v-model="input" placeholder="请输入用户名"></lee-input>
  <p>{{input}}</p>
</div>

::: demo
``` html
<lee-input v-model="input" placeholder="请输入用户名"></lee-input>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

## 禁用状态
通过 ```disabled``` 属性指定是否禁用 input 组件

<div class="demo-block">
  <lee-input disabled v-model="input" placeholder="请输入用户名"></lee-input>
  <p>{{input1}}</p>
</div>

::: demo
``` html
<lee-input disabled v-model="input1" placeholder="请输入用户名"></lee-input>
<script>
export default {
  data() {
    return {
      input1: ''
    }
  }
}
</script>
```
:::
