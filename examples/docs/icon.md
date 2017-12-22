<script>
  var iconList = require('../icon.json');

  export default {
    data() {
      return {
        icons: iconList
      };
    },
    methods: {
      onCopy: function (e) {
        alert('复制成功: ' + e.text + '！')
      },
      onError: function (e) {
        alert('复制失败，请重试！')
      }
    }
  }
</script>
<style lang="less">
  .demo-icon .source > i {
    font-size: 24px;
    color: #8492a6;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }

  .demo-icon .source > button {
    margin: 0 20px;
  }

  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
      color: #606266;
      cursor:pointer;
    }
    .lee-icon {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #606266;
    }
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>

# Icon图标

语义化的矢量图形，```VV-UI``` 使用开源的 Iconfont (阿里妈妈MUX倾力打造的矢量图标管理、交流平台) 作为图标库，并制作成了 ```icon font```。
## 如何使用

使用 ```class="icon"``` 来声明图标，具体图标的名称请 copy 相应的标签
<div class="demo-block">
  <lee-icon name="code" size="30" color="#666"></lee-icon>
  <lee-icon name="bags" size="30" color="#666"></lee-icon>
  <lee-icon name="task-management" size="30" color="#666"></lee-icon>
  <lee-icon name="video" size="30" color="#666"></lee-icon>
  <lee-icon name="favorites" size="30" color="#666"></lee-icon>
</div>

::: demo
```html

<i class="iconfont icon-component fs-24"></i>
<i class="iconfont icon-survey1 fs-24"></i>
<i class="iconfont icon-templatedefault fs-24"></i>
<i class="iconfont icon-office fs-24"></i>

```
:::

## 图标示例
点击图标即可复制改图标名称！

<ul class="icon-list">
  <li v-for="(name, index) in icons" :key="index">
    <span
      v-clipboard:copy="name"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
    >
      <lee-icon :name="name"></lee-icon>
      {{name}}
    </span>
  </li>
</ul>
