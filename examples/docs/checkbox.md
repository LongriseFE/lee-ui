<script>
  export default {
    data () {
      return {
        checkbox: '1',
        checkbox1: '2',
        checkbox2: 3,
        checkbox3: 3,
        checkbox4: 1,
        checkbox5: 2,
        checkbox6: 1
      };
    }
  }
</script>
# checkbox复选框
<div class="demo-block">
  <lee-checkbox v-model="checkbox" label="1" name="name">备选项</lee-checkbox>
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
