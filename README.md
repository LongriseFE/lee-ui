## 开始动手写vue ui库
### 创建vue项目
可以利用现成的vue-cli脚手架创建项目结构
``` bash
vue init webpack XXX
cd XXX
yarn  // or npm install
npm run dev
```
到此为止，一个普通的vue项目就创建成功，接下来需要改变一下现有的目录结构。
### 更改目录结构
```
.
...
|-- examples  //原src目录改成examples用作示例展示
|-- packages //新增 packages用于组件编写目录
...
.
```
这样改完之后项目是直接跑不起来的，需要改下webpack的配置，打开./build/webpack.base.conf.js，将里面所有有关src的位置改成examples。大致有下面几个位置需要修改：
```
1、
const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('examples'), resolve('test')],  //这里的src改成examples
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})
2、
entry: {
  app: './examples/main.js'  // 入口文件改成examples目录
},
3、
resolve: {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('examples'),  //将@解释成examples
  }
}
4、
{
  test: /\.js$/,
  loader: 'babel-loader',
  include: [resolve('examples'), resolve('test')]
}
```
最后为了最后 npm run build能正常编译packages，我们需要为babel-loader增加一个规则
```
{
   test: /\.js$/,
   loader: 'babel-loader',
   include: [resolve('examples'), resolve('test'), resolve('packages')]
}
```
这时候，再运行 npm run build就能正常打包了，但是有个问题，打包出来的文件直接运行会报404错误，这是因为打包的根目录设置有问题，打开./config/index.js，找到build下面的assetsPublicPath: '/'，改成如下即可
```
assetsPublicPath: './'
```
### 编写文档
一个好的ui库，说明文档自然是不可或缺的，然而markdown是最合适不过的，然而我们现在是一个vue项目，怎样再vue项目里面用markdown来编写文档呢？答案是：[vue-markdown-loader](http://link.zhihu.com/?target=https%3A//github.com/QingWei-Li/vue-markdown-loader)打开如上链接，按照里面的说明文档配置webpack
```
npm i vue-markdown-loader -D
```
安装完成之后修改webpack.base.config.js文件，在rules下面添加一条
``` javascript
{
  test: /\.md$/,
  loader: 'vue-markdown-loader'
}
```
接下来创建文件./examples/docs/home.md
``` markdown
## 这是首页
::: demo
``` html
<div class="input">
  <input type="text" placeholder="请输入用户名"/>
</div>
```
修改router/index.js，将路由中的vue文件路径改成markdown的路径
``` javascript
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: r => require.ensure([], () => r(require('../docs/home.md')))
    }
  ]
})
```


提示： 如果当你运行项目的时候遇到如下的报错,你需要重新运行一下 yarn 或者npm install
``` bash
'webpack-dev-server' 不是内部或外部命令，也不是可运行的程序
或批处理文件。
```
这时候再次运行项目，应该可以看到刚才markdown中的内容！但是我们的说明文档可不止止是文字，链接，图片这么简单，我们还需要案例展示和代码展示，接下来，我们需要配置vue-mark-down的option选项
``` javascript
const MarkdownItContainer = require('markdown-it-container')
const striptags = require('./strip-tags')

const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
    return source
  },
  use: [
    [MarkdownItContainer, 'demo', {
      // 用于校验包含demo的代码块
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: function(tokens, idx) {

        var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);

        if (tokens[idx].nesting === 1) {
          var desc = tokens[idx + 2].content;
          // 编译成html
          const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))
          // 移除描述，防止被添加到代码块
          tokens[idx + 2].children = [];

          return `<demo-block>
                        <div slot="desc">${html}</div>
                        <div slot="highlight">`;
        }
        return '</div></demo-block>\n';
      }
    }]
  ]
}
```
将上面的这个变量放在./build/webpack.base.config.js中并修改如下
``` javascript
{
  test: /\.md$/,
  loader: 'vue-markdown-loader',
  options: vueMarkdown
}
```
在./build/utils.js中添加如下
``` javascript
/**
 * 增加 hljs 的 classname
 */
exports.wrapCustomClass = function (render) {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

/**
 * Format HTML string
 */
exports.convertHtml = function (str) {
  return str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
}
```
新增./build/strip-tags.js
``` javascript
/**
 * 转换成DOM字符串
 */
const cheerio = require('cheerio')

module.exports = (str, tags) => {
  const $ = cheerio.load(str, { decodeEntities: false })

  if (!tags || tags.length === 0) {
    return str
  }

  tags = !Array.isArray(tags) ? [tags] : tags
  let len = tags.length

  while (len--) {
    $(tags[len]).remove()
  }

  return $.html()
}

```
上面都准备好了之后，我们需要安装相应的依赖
``` bash
npm i markdown-it-container --save-dev
```
到此之后我们便可以看到markdown文件中既可以展示文字，代码，还可以展示可交互的输入框等等。但是这时候，页面中的代码并没有显示代码高亮，其实我们的页面元素已经有了代码高亮，只是没有引用css文件，只需要将 node_modules/highlight.js/styles/color-brewer.css引入到项目中即可，接下来就是全心全意的写插件了。

未完待续！
