# Button 按钮
----
### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <lee-button>默认按钮</lee-button>
    <lee-button type="primary">主要按钮</lee-button>
    <lee-button type="success">成功按钮</lee-button>
    <lee-button type="info">信息按钮</lee-button>
    <lee-button type="warning">警告按钮</lee-button>
    <lee-button type="danger">危险按钮</lee-button>
  </div>
  <div class="m-10">
    <lee-button plain>朴素按钮</lee-button>
    <lee-button type="primary" plain>主要按钮</lee-button>
    <lee-button type="success" plain>成功按钮</lee-button>
    <lee-button type="info" plain>信息按钮</lee-button>
    <lee-button type="warning" plain>警告按钮</lee-button>
    <lee-button type="danger" plain>危险按钮</lee-button>
  </div>
  <div class="m-10">
    <lee-button round>圆形按钮</lee-button>
    <lee-button type="primary" round>主要按钮</lee-button>
    <lee-button type="success" round>成功按钮</lee-button>
    <lee-button type="info" round>信息按钮</lee-button>
    <lee-button type="warning" round>警告按钮</lee-button>
    <lee-button type="danger" round>危险按钮</lee-button>
  </div>
</div>

::: demo
```html

<div>
  <lee-button>默认按钮</lee-button>
  <lee-button type="primary">主要按钮</lee-button>
  <lee-button type="success">成功按钮</lee-button>
  <lee-button type="info">信息按钮</lee-button>
  <lee-button type="warning">警告按钮</lee-button>
  <lee-button type="danger">危险按钮</lee-button>
</div>
<div>
  <lee-button plain>朴素按钮</lee-button>
  <lee-button type="primary" plain>主要按钮</lee-button>
  <lee-button type="success" plain>成功按钮</lee-button>
  <lee-button type="info" plain>信息按钮</lee-button>
  <lee-button type="warning" plain>警告按钮</lee-button>
  <lee-button type="danger" plain>危险按钮</lee-button>
</div>
<div>
  <lee-button round>圆形按钮</lee-button>
  <lee-button type="primary" round>主要按钮</lee-button>
  <lee-button type="success" round>成功按钮</lee-button>
  <lee-button type="info" round>信息按钮</lee-button>
  <lee-button type="warning" round>警告按钮</lee-button>
  <lee-button type="danger" round>危险按钮</lee-button>
</div>

```
:::

### 禁用状态

按钮不可用状态。

<div class="demo-block">
  <div>
    <lee-button disabled>默认按钮</lee-button>
    <lee-button type="primary" disabled>主要按钮</lee-button>
    <lee-button type="success" disabled>成功按钮</lee-button>
    <lee-button type="info" disabled>信息按钮</lee-button>
    <lee-button type="warning" disabled>警告按钮</lee-button>
    <lee-button type="danger" disabled>危险按钮</lee-button>
  </div>
  <div class="m-10">
    <lee-button plain disabled>朴素按钮</lee-button>
    <lee-button type="primary" plain disabled>主要按钮</lee-button>
    <lee-button type="success" plain disabled>成功按钮</lee-button>
    <lee-button type="info" plain disabled>信息按钮</lee-button>
    <lee-button type="warning" plain disabled>警告按钮</lee-button>
    <lee-button type="danger" plain disabled>危险按钮</lee-button>
  </div>
</div>

::: demo
```html

<div>
  <lee-button disabled>默认按钮</lee-button>
  <lee-button type="primary" disabled>主要按钮</lee-button>
  <lee-button type="success" disabled>成功按钮</lee-button>
  <lee-button type="info" disabled>信息按钮</lee-button>
  <lee-button type="warning" disabled>警告按钮</lee-button>
  <lee-button type="danger" disabled>危险按钮</lee-button>
</div>
<div class="m-10">
  <lee-button plain disabled>朴素按钮</lee-button>
  <lee-button type="primary" plain disabled>主要按钮</lee-button>
  <lee-button type="success" plain disabled>成功按钮</lee-button>
  <lee-button type="info" plain disabled>信息按钮</lee-button>
  <lee-button type="warning" plain disabled>警告按钮</lee-button>
  <lee-button type="danger" plain disabled>危险按钮</lee-button>
</div>

```
:::

### 图标按钮
带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
设置```icon```属性即可，icon 的列表可以参考 VV-UI 的 icon 组件，也可以设置在文字右边的 icon ，只要使用```i```标签即可，可以使用自定义图标。
<div class="demo-block">
  <lee-button icon="icon-search" type="primary"></lee-button>
  <lee-button icon="icon-edit" type="primary"></lee-button>
  <lee-button icon="icon-delete" type="primary"></lee-button>
  <lee-button icon="icon-set" type="primary">搜索</lee-button>
  <lee-button icon="icon-warning" type="primary">下载</lee-button>
</div>

::: demo
```html

<lee-button icon="icon-search" type="primary"></lee-button>
  <lee-button icon="icon-edit" type="primary"></lee-button>
  <lee-button icon="icon-delete" type="primary"></lee-button>
  <lee-button icon="icon-set" type="primary">搜索</lee-button>
  <lee-button icon="icon-warning" type="primary">下载</lee-button>

```
:::

### 按钮组
以按钮组的方式出现，常用于多项类似操作。
<div class="demo-block">
  <div class="m-10">
    <lee-button-group>
      <lee-button icon="icon-back">默认尺寸</lee-button>
      <lee-button icon="icon-cry">中等按钮</lee-button>
      <lee-button icon="icon-more">小型按钮</lee-button>
    </lee-button-group>
  </div>
  <div class="m-10">
    <lee-button-group>
      <lee-button icon="icon-back"></lee-button>
      <lee-button icon="icon-cry"></lee-button>
      <lee-button icon="icon-more"></lee-button>
    </lee-button-group>
  </div>
  <div class="m-10">
    <lee-button-group>
      <lee-button type="primary">默认尺寸</lee-button>
      <lee-button type="primary">中等按钮</lee-button>
      <lee-button type="primary">小型按钮</lee-button>
    </lee-button-group>
  </div>
  <div class="m-10">
    <lee-button-group>
      <lee-button type="danger">默认尺寸</lee-button>
      <lee-button type="danger">中等按钮</lee-button>
      <lee-button type="danger">小型按钮</lee-button>
    </lee-button-group>
  </div>
  <div class="m-10">
    <lee-button-group>
      <lee-button icon="icon-back" type="warning"></lee-button>
      <lee-button icon="icon-cry" type="warning"></lee-button>
      <lee-button icon="icon-more" type="warning"></lee-button>
    </lee-button-group>
  </div>
</div>

::: demo
```html
<div class="m-10">
    <lee-button-group>
      <lee-button icon="icon-back">默认尺寸</lee-button>
      <lee-button icon="icon-cry">中等按钮</lee-button>
      <lee-button icon="icon-more">小型按钮</lee-button>
    </lee-button-group>
  </div>
  <div class="m-10">
    <lee-button-group>
      <lee-button icon="icon-back"></lee-button>
      <lee-button icon="icon-cry"></lee-button>
      <lee-button icon="icon-more"></lee-button>
    </lee-button-group>
  </div>
  <div class="m-10">
    <lee-button-group>
      <lee-button type="primary">默认尺寸</lee-button>
      <lee-button type="primary">中等按钮</lee-button>
      <lee-button type="primary">小型按钮</lee-button>
    </lee-button-group>
  </div>
  <div class="m-10">
    <lee-button-group>
      <lee-button type="danger">默认尺寸</lee-button>
      <lee-button type="danger">中等按钮</lee-button>
      <lee-button type="danger">小型按钮</lee-button>
    </lee-button-group>
  </div>
  <div class="m-10">
    <lee-button-group>
      <lee-button icon="icon-back" type="warning"></lee-button>
      <lee-button icon="icon-cry" type="warning"></lee-button>
      <lee-button icon="icon-more" type="warning"></lee-button>
    </lee-button-group>
  </div>

```
:::
### 加载中
点击按钮后进行数据加载操作，在按钮上显示加载状态。
<div class="demo-block">
  <div class="m-10">
    <lee-button type="primary" :loading="true">加载中</lee-button>
  </div>
</div>

::: demo

```html

<lee-button type="primary" :loading="true">加载中</lee-button>
```
:::


### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。
额外的尺寸：```medium```、```small```，通过设置```size```属性来配置它们。
<div class="demo-block">
  <div class="m-10">
    <lee-button>默认尺寸</lee-button>
    <lee-button size="medium">中等按钮</lee-button>
    <lee-button size="small">小型按钮</lee-button>
  </div>
  <div class="m-10">
    <lee-button round>默认尺寸</lee-button>
    <lee-button round size="medium">中等按钮</lee-button>
    <lee-button round size="small">小型按钮</lee-button>
  </div>
</div>

::: demo
```html

<lee-button>默认尺寸</lee-button>
<lee-button size="medium">中等按钮</lee-button>
<lee-button size="small">小型按钮</lee-button>

<lee-button round>默认尺寸</lee-button>
<lee-button round size="medium">中等按钮</lee-button>
<lee-button round size="small">小型按钮</lee-button>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   default,medium,small            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| loading  | 是否正在加载中！ | Boolean   |  —  |  false |
