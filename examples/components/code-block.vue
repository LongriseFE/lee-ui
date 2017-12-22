<template>
  <div class="docs-code-wrapper">
      <div class="code-container">
        <div span="14">
          <div class="docs-code docs-code--expand">
            <div class="highlight-wrapper">
              <slot name="highlight"></slot>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import Vue from 'vue'
  export default {
    data() {
      return {
        isExpand: false
      };
    },
    methods: {
      toggle() {
        this.isExpand = !this.isExpand;
      }
    }
  };
</script>

<style lang="less" type="text/less">

  .code-container {
    transition: max-height .3s ease;
    overflow: hidden;
  }
  .docs-code {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    font-size: 14px;
    background-color: #FAFAFA;
    border: 1px solid #e2ecf4;
    margin:10px 0;
    pre code {
      font-family: Consolas,Menlo,Courier,monospace;
      line-height: 22px;
      border: none;
    }
  }
  .docs-trans {
    width: 100%;
    text-align: center;
    display: inline-block;
    color: #d3dce6;
    font-size: 12px;
    padding: 15px 0;
    background-color: #fff;
    border:1px solid #EBEBEB;
    box-sizing: border-box;
    border-top:none;
    border-radius:0 0 5px 5px;
    transition:0.3s;
  }
  .docs-trans:hover{
    background:#F9FAFC;
    color:#308AE6;
  }
  .docs-code__code,
  .highlight-wrapper,
  .docs-code__meta {
    padding: 0 20px;
    overflow-y: auto;
  }

  .docs-code__code {
    border-bottom: 1px solid #eee;
  }
  .docs-code.docs-code--expand .docs-code__meta {
    border-bottom: 1px dashed #e9e9e9;
  }

  .docs-code.docs-code--expand .docs-code__triangle {
    transform: rotate(180deg);
  }

  .highlight-wrapper {
    display: none;

    p,
    pre {
      margin: 0;
    }

    .hljs {
      padding: 0;
    }
  }

  .docs-code.docs-code--expand .highlight-wrapper {
    display: block;
  }

  .docs-code__code__mobi {
    height: 620px;
    margin: 20px 0;
  }

  .docs-code__code__mobi__header {
    border-radius: 4px 4px 0 0;
    background: -webkit-linear-gradient(rgba(55,55,55,.98),#545456);
    background: linear-gradient(rgba(55,55,55,.98),#545456);
    text-align: center;
    padding: 8px;

    img {
      width: 100%;
    }

    .url-box {
      height: 28px;
      line-height: 28px;
      color: #fff;
      padding: 0 3px;
      background-color: #a2a2a2;
      margin: 10px auto 0;
      border-radius: 4px;
      white-space: nowrap;
      overflow-x: auto;
    }
  }

  .docs-code__code__mobi__content {
    iframe {
      width: 100%;
      border: 0;
      height: 548px;
    }
  }
</style>

