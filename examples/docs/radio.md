<script>
  export default {
    data () {
      return {
        radio: '1',
        radio1: '2',
        radio2: 3,
        radio3: 3,
        radio4: 1,
        radio5: 2,
        radio6: 1
      };
    }
  }
</script>
# radio单选框
在一组备选项中进行单选
## 基础用法
由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

要使用 ```Radio``` 组件，只需要设置```v-model```绑定变量，选中意味着变量的值为相应 Radio ```label```属性的值，label可以是```String```、```Number```或```Boolean```。
<div class="demo-block">
  <lee-radio v-model="radio" label="1" name="name">备选项</lee-radio>
  <lee-radio v-model="radio" label="2" name="name">备选项</lee-radio>
  <lee-radio v-model="radio" label="3" name="name">备选项</lee-radio>
</div>

::: demo
```html

<lee-radio v-model="radio" label="1" name="name">备选项</lee-radio>
<lee-radio v-model="radio" label="2" name="name">备选项</lee-radio>
<lee-radio v-model="radio" label="3" name="name">备选项</lee-radio>
<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```
:::

## 禁用状态
单选框不可用的状态。

<div class="demo-block">
  <lee-radio disabled v-model="radio1" label="1" name="name1">备选项</lee-radio>
  <lee-radio disabled v-model="radio1" label="2" name="name1">备选项</lee-radio>
  <lee-radio disabled v-model="radio1" label="3" name="name1">备选项</lee-radio>
</div>

::: demo
```html

<lee-radio disabled v-model="radio1" label="1" name="name1">备选项</lee-radio>
<lee-radio disabled v-model="radio1" label="2" name="name1">备选项</lee-radio>
<lee-radio disabled v-model="radio1" label="3" name="name1">备选项</lee-radio>
<script>
  export default {
    data () {
      return {
        radio1: '1'
      };
    }
  }
</script>
```
:::

## 单选框组
适用于在多个互斥的选项中选择的场景
结合```lee-radio-group```元素和子元素```lee-radio```可以实现单选组，在```lee-radio-group```中绑定```v-model```，在```lee-radio```中设置好```label```即可，无需再给每一个```lee-radio```绑定变量，另外，还提供了```change```事件来响应变化，它会传入一个参数```value```。

<div class="demo-block">
  <lee-radio-group v-model="radio2">
    <lee-radio :label="1" name="name2">备选项</lee-radio>
    <lee-radio :label="2" name="name2">备选项</lee-radio>
    <lee-radio :label="3" name="name2">备选项</lee-radio>
  </lee-radio-group>
</div>

::: demo
```html
<lee-radio-group v-model="radio2">
  <lee-radio :label="1" name="name2">备选项</lee-radio>
  <lee-radio :label="2" name="name2">备选项</lee-radio>
  <lee-radio :label="3" name="name2">备选项</lee-radio>
</lee-radio-group>
<script>
  export default {
    data () {
      return {
        radio2: 3
      };
    }
  }
</script>
```
:::

## 按钮样式
按钮样式的单选组合。
只需要把```lee-radio```元素换成```lee-radio-button```元素即可，此外，Lee 还提供了```size```属性。

<div class="demo-block">
  <lee-radio-group v-model="radio3">
    <lee-radio-button :label="1" name="name3">备选项</lee-radio-button>
    <lee-radio-button :label="2" name="name3">备选项</lee-radio-button>
    <lee-radio-button :label="3" name="name3">备选项</lee-radio-button>
  </lee-radio-group>
  <lee-radio-group v-model="radio4" class="m-10" size="medium">
    <lee-radio-button :label="1" name="name4">备选项</lee-radio-button>
    <lee-radio-button disabled :label="2" name="name4">备选项</lee-radio-button>
    <lee-radio-button :label="3" name="name4">备选项</lee-radio-button>
  </lee-radio-group>
  <lee-radio-group v-model="radio5" class="m-10" size="small">
    <lee-radio-button :label="1" name="name5">备选项</lee-radio-button>
    <lee-radio-button :label="2" name="name5">备选项</lee-radio-button>
    <lee-radio-button :label="3" name="name5">备选项</lee-radio-button>
  </lee-radio-group>
  <lee-radio-group v-model="radio6" disabled class="m-10">
    <lee-radio-button size="small" :label="1" name="name6">备选项</lee-radio-button>
    <lee-radio-button size="small" :label="2" name="name6">备选项</lee-radio-button>
    <lee-radio-button size="small" :label="3" name="name6">备选项</lee-radio-button>
  </lee-radio-group>
</div>

::: demo
```html
<lee-radio-group v-model="radio3">
  <lee-radio-button :label="1" name="name3">备选项</lee-radio-button>
  <lee-radio-button :label="2" name="name3">备选项</lee-radio-button>
  <lee-radio-button :label="3" name="name3">备选项</lee-radio-button>
</lee-radio-group>
<lee-radio-group v-model="radio4" class="m-10">
  <lee-radio-button size="medium" :label="1" name="name4">备选项</lee-radio-button>
  <lee-radio-button disabled size="medium" :label="2" name="name4">备选项</lee-radio-button>
  <lee-radio-button size="medium" :label="3" name="name4">备选项</lee-radio-button>
</lee-radio-group>
<lee-radio-group v-model="radio5" class="m-10">
  <lee-radio-button size="small" :label="1" name="name5">备选项</lee-radio-button>
  <lee-radio-button size="small" :label="2" name="name5">备选项</lee-radio-button>
  <lee-radio-button size="small" :label="3" name="name5">备选项</lee-radio-button>
</lee-radio-group>
<lee-radio-group v-model="radio6" disabled class="m-10">
  <lee-radio-button size="small" :label="1" name="name6">备选项</lee-radio-button>
  <lee-radio-button size="small" :label="2" name="name6">备选项</lee-radio-button>
  <lee-radio-button size="small" :label="3" name="name6">备选项</lee-radio-button>
</lee-radio-group>
<script>
  export default {
    data () {
      return {
        radio3: 3,
        radio4: 1,
        radio5: 2,
        radio6: 3
      };
    }
  }
</script>
```
:::

## Radio Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value   | string / number / boolean    |       —        |      —   |
| disabled  | 是否禁用    | boolean   | — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Radio 的尺寸，仅在 border 为真时有效  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |

## Radio Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

## Radio-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效   | string  | medium / small / mini |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| text-color  | 按钮形式的 Radio 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Radio 激活时的填充色和边框色    | string   | — | #409EFF   |

### Radio-group Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio label 值  |

## Radio-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value  | string / number  |        —       |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
