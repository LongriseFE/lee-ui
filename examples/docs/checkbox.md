<script>
  const cityOptions = ['上海', '北京', '广州', '深圳']
  export default {
    data () {
      return {
        checkbox: false,
        checkbox1: true,
        checkbox2: false,
        checkbox3: ['复选框D'],
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        checkedCities1: ['广州'],
        checkedCities2: [],
        checkedCities3: [],
        checkedCities4: [],
        checkedCities5: []
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : []
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.cities.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
      }
    }
  }
</script>
# checkbox复选框
一组备选项中进行多选
## 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。
在```lee-checkbox```元素中定义```v-model```绑定变量，单一的```checkbox```中，默认绑定变量的值会是```Boolean```，选中为```true```。
<div class="demo-block">
  <lee-checkbox v-model="checkbox">备选项</lee-checkbox>
</div>

::: demo
```html

<lee-checkbox v-model="checkbox" name="name">备选项</lee-checkbox>
<script>
  export default {
    data () {
      return {
        checkbox: true
      };
    }
  }
</script>
```
:::
## 禁用状态
多选框不可用状态。
设置```disabled```属性即可。
<div class="demo-block">
  <lee-checkbox disabled v-model="checkbox1" name="name1">备选项</lee-checkbox>
  <lee-checkbox disabled v-model="checkbox2" name="name2">备选项</lee-checkbox>
</div>

::: demo
```html

<lee-checkbox disabled v-model="checkbox1" name="name1">备选项</lee-checkbox>
<lee-checkbox disabled v-model="checkbox2" name="name2">备选项</lee-checkbox>
<script>
  export default {
    data () {
      return {
        checkbox1: true,
        checkbox2: true
      };
    }
  }
</script>
```
:::
## 多选框组
适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

```checkbox-group```元素能把多个 ```checkbox``` 管理为一组，只需要在 Group 中使用```v-model```绑定```Array```类型的变量即可。 lee-checkbox 的 ```label```属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

<div class="demo-block">
  <p style="margin-bottom:10px;">{{checkbox3}}</p>
  <lee-checkbox-group v-model="checkbox3">
    <lee-checkbox name="name3" label="复选框A">复选框A</lee-checkbox>
    <lee-checkbox name="name3" label="复选框B">复选框B</lee-checkbox>
    <lee-checkbox disabled name="name3" label="复选框C">复选框C</lee-checkbox>
    <lee-checkbox disabled name="name3" label="复选框D">复选框D</lee-checkbox>
  </lee-checkbox-group>
</div>

::: demo
```html

<p style="margin-bottom:10px;">{{checkbox3}}</p>
<lee-checkbox-group v-model="checkbox3">
  <lee-checkbox name="name3" label="复选框A">复选框A</lee-checkbox>
  <lee-checkbox name="name3" label="复选框B">复选框B</lee-checkbox>
  <lee-checkbox disabled name="name3" label="复选框C">复选框C</lee-checkbox>
  <lee-checkbox disabled name="name3" label="复选框D">复选框D</lee-checkbox>
</lee-checkbox-group>
<script>
  export default {
    data () {
      return {
        checkbox3: ['复选框D']
      };
    }
  }
</script>
```
:::

## indeterminate 状态
```indeterminate``` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果
<div class="demo-block">
  <lee-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" style="margin-bottom:10px;">全选</lee-checkbox>
  <lee-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <lee-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</lee-checkbox>
  </lee-checkbox-group>
</div>

::: demo
```html

<lee-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" style="margin-bottom:10px;">全选</lee-checkbox>
<lee-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
  <lee-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</lee-checkbox>
</lee-checkbox-group>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
```
:::

## 可选项目数量的限制
使用 min 和 max 属性能够限制可以被勾选的项目的数量。
<div class="demo-block">
  <lee-checkbox-group v-model="checkedCities1" :min="1" :max="3">
    <lee-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</lee-checkbox>
  </lee-checkbox-group>
</div>

::: demo
``` html
<lee-checkbox-group v-model="checkedCities1" :min="1" :max="3">
  <lee-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</lee-checkbox>
</lee-checkbox-group>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkedCities1: ['上海', '北京'],
        cities: cityOptions
      };
    }
  };
</script>
```
:::
## 按钮样式
按钮样式的多选组合。

只需要把```lee-radio```元素换成```lee-radio-button```元素即可，此外，lee 还提供了size属性。

<div class="demo-block">
  <lee-checkbox-group v-model="checkedCities2" style="margin-bottom:10px;">
    <lee-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lee-checkbox-button>
  </lee-checkbox-group>
  <lee-checkbox-group v-model="checkedCities3" size="medium" style="margin-bottom:10px;">
    <lee-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lee-checkbox-button>
  </lee-checkbox-group>
  <lee-checkbox-group v-model="checkedCities4" size="small" style="margin-bottom:10px;">
    <lee-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lee-checkbox-button>
  </lee-checkbox-group>
  <lee-checkbox-group v-model="checkedCities5" size="mini" style="margin-bottom:10px;">
    <lee-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lee-checkbox-button>
  </lee-checkbox-group>
</div>

::: demo
``` html
<lee-checkbox-group v-model="checkedCities2" style="margin-bottom:10px;">
  <lee-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lee-checkbox-button>
</lee-checkbox-group>
<lee-checkbox-group v-model="checkedCities3" size="medium" style="margin-bottom:10px;">
  <lee-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lee-checkbox-button>
</lee-checkbox-group>
<lee-checkbox-group v-model="checkedCities4" size="small" style="margin-bottom:10px;">
  <lee-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lee-checkbox-button>
</lee-checkbox-group>
<lee-checkbox-group v-model="checkedCities5" size="mini" style="margin-bottom:10px;">
  <lee-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</lee-checkbox-button>
</lee-checkbox-group>
```
:::

## Checkbox Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string / number / boolean  |       —        |     —    |
| true-label | 选中时的值   | string / number | — |     —    |
| false-label | 没有选中时的值   | string / number    |      —         |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| border  | 是否显示边框  | boolean   | — | false   |
| size  | Checkbox 的尺寸，仅在 border 为真时有效  | string  | medium / small / mini | — |
| name | 原生 name 属性 | string    |      —         |     —    |
| checked  | 当前是否勾选    | boolean   |  — | false   |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制    | boolean   |  — | false   |

## Checkbox Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

## Checkbox-group Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效   | string  | medium / small / mini  |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| min     | 可被勾选的 checkbox 的最小数量   | number    |       —        |     —    |
| max     | 可被勾选的 checkbox 的最大数量   | number    |       —        |     —    |
| text-color  | 按钮形式的 Checkbox 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Checkbox 激活时的填充色和边框色    | string   | — | #409EFF   |

## Checkbox-group Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

## Checkbox-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string / number / boolean  |       —        |     —    |
| true-label | 选中时的值   | string / number | — |     —    |
| false-label | 没有选中时的值   | string / number    |      —         |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
| checked  | 当前是否勾选    | boolean   |  — | false   |
