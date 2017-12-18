# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。
## 基础布局
使用单一分栏创建基础的栅格布局。通过 row 和 col 组件，并通过 col 组件的 :span 属性我们就可以自由地组合布局。
<div class="demo-block">
  <lee-row>
    <lee-col :span="3">
      <div class="grid-content bg-purple-dark"></div>
    </lee-col>
    <lee-col :span="4">
      <div class="grid-content bg-purple"></div>
    </lee-col>
    <lee-col :span="5">
      <div class="grid-content bg-purple-light"></div>
    </lee-col>
    <lee-col :span="8">
      <div class="grid-content bg-purple-dark"></div>
    </lee-col>
    <lee-col :span="4">
      <div class="grid-content bg-purple"></div>
    </lee-col>
    <lee-col :span="12">
      <div class="grid-content bg-purple-light"></div>
    </lee-col>
    <lee-col :span="12">
      <div class="grid-content bg-purple-dark"></div>
    </lee-col>
    <lee-col :span="24">
      <div class="grid-content bg-purple"></div>
    </lee-col>
  </lee-row>
</div>

::: demo
```html

<lee-row>
  <lee-col :span="3">
    <div class="grid-content bg-purple-dark"></div>
  </lee-col>
  <lee-col :span="4">
    <div class="grid-content bg-purple"></div>
  </lee-col>
  <lee-col :span="5">
    <div class="grid-content bg-purple-light"></div>
  </lee-col>
  <lee-col :span="8">
    <div class="grid-content bg-purple-dark"></div>
  </lee-col>
  <lee-col :span="4">
    <div class="grid-content bg-purple"></div>
  </lee-col>
  <lee-col :span="12">
    <div class="grid-content bg-purple-light"></div>
  </lee-col>
  <lee-col :span="12">
    <div class="grid-content bg-purple-dark"></div>
  </lee-col>
  <lee-col :span="24">
    <div class="grid-content bg-purple"></div>
  </lee-col>
</lee-row>
<style>
  .demo-block .grid-content{
    min-height:40px;
    line-height:40px;
    text-align:center;
    border-radius:5px;
    margin:5px 0;
  }
  .bg-purple-dark{
    background:#99A9BF;
  }
  .bg-purple{
    background:#D3DCE6;
  }
  .bg-purple-light{
    background:#E5E9F2;
  }
</style>
```
:::

## 分栏间隔
分栏之间存在间隔。
<div class="demo-block">
  <lee-row :gutter="10">
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
</div>

::: demo
```html

<lee-row :gutter="10">
  <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
</lee-row>
<style>
  .demo-block .grid-content{
    min-height:40px;
    line-height:40px;
    text-align:center;
    border-radius:5px;
    margin:5px 0;
  }
  .bg-purple-dark{
    background:#99A9BF;
  }
  .bg-purple{
    background:#D3DCE6;
  }
  .bg-purple-light{
    background:#E5E9F2;
  }
</style>
```
:::

## 混合布局
通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<div class="demo-block">
  <lee-row :gutter="10">
    <lee-col :span="4"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="5"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="7"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="8"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="8"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="2"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="5"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="4"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="5"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
</div>

::: demo
```html

<lee-row :gutter="10">
  <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
</lee-row>
<style>
  .demo-block .grid-content{
    min-height:40px;
    line-height:40px;
    text-align:center;
    border-radius:5px;
    margin:5px 0;
  }
  .bg-purple-dark{
    background:#99A9BF;
  }
  .bg-purple{
    background:#D3DCE6;
  }
  .bg-purple-light{
    background:#E5E9F2;
  }
</style>
```
:::

## 分栏偏移

支持偏移指定的栏数。通过制定 ```col``` 组件的 ```offset``` 属性可以指定分栏偏移的栏数。
<div class="demo-block">
  <lee-row :gutter="10">
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
  <lee-row :gutter="10">
    <lee-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
  <lee-row :gutter="10">
    <lee-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
</div>

::: demo
```html

<lee-row :gutter="10">
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
  <lee-row :gutter="10">
    <lee-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
  <lee-row :gutter="10">
    <lee-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
```
:::

## 对齐方式
通过 ```flex``` 布局来对分栏进行灵活的对齐。

将 ```type``` 属性赋值为 'flex'，可以启用 flex 布局，并可通过 ```justify``` 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。
<div class="demo-block">
  <lee-row :gutter="10" type="flex" class="row-bg">
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
  <lee-row :gutter="10" type="flex" justify="center" class="row-bg">
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
  <lee-row :gutter="10" type="flex" justify="end" class="row-bg">
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
  <lee-row :gutter="10" type="flex" justify="space-between" class="row-bg">
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
  <lee-row :gutter="10" type="flex" justify="space-around" class="row-bg">
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
    <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  </lee-row>
</div>

::: demo
```html

<lee-row :gutter="10">
  <lee-col :span="6"><div class="grid-content bg-purple"></div></lee-col>
  <lee-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></lee-col>
</lee-row>
<lee-row :gutter="10">
  <lee-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></lee-col>
  <lee-col :span="6" :offset="6"><div class="grid-content bg-purple"></div></lee-col>
</lee-row>
<lee-row :gutter="10">
  <lee-col :span="12" :offset="6"><div class="grid-content bg-purple"></div></lee-col>
</lee-row>
```
:::
