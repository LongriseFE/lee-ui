<script>
  export default {
    data () {
      return {
        radio: '1',
        radio1: '2',
        radio2: 3
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
结合```el-radio-group```元素和子元素```el-radio```可以实现单选组，在```el-radio-group```中绑定```v-model```，在```el-radio```中设置好```label```即可，无需再给每一个```el-radio```绑定变量，另外，还提供了```change```事件来响应变化，它会传入一个参数```value```。

<div class="demo-block">
{{radio2}}
  <lee-radio-group v-model="radio2">
    <lee-radio :label="1" name="name2">备选项</lee-radio>
    <lee-radio :label="2" name="name2">备选项</lee-radio>
    <lee-radio :label="3" name="name2">备选项</lee-radio>
  </lee-radio-group>
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
