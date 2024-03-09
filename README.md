# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## TodoList

* [x] 后端接口修改一下
  * [x] 适配三种图片上传
  * [ ] 图片格式校验处理一下，防止被入侵
* [ ] 目前遇到的多图片上传的bug处理一下，为什么会返回一样的 url ？
  * [ ] 是因为时间戳相同导致返回两张一样的图片吗？（后端）
  * [ ] 还是因为前端传输问题，antd 的 action 不好用？如果是这样就自己在回调函数中执行方法。
  * [ ] 还有一个不太重要的，文件上传的顺序和我选择的顺序又是不一样了，这时候要怎么处理才能让它变成一样的顺序呢？
    * [ ] 这个问题统一解决一下，这样说不定还能写到简历中！毕竟需求也遇到了
* [ ] 将博客的图片进行更新优化，展示到页面上
* [ ] 部署前端项目到服务器上，如果可以也弄一个 Jenkins 来实现自动构建吧!
* [ ] 前端埋点的接口实现以及前端图表展示
* [ ] 目前的 URL 是写死的，去了解一下 开发环境相关的知识，并且实现自动根据不同的环境获取 URL。目前看了教程，知道怎么配置了，但如何使用，以及会发生什么事还不清楚，去变强！

## 开发过程中的小细节

> 重定向路由时，网上的教程都是针对 jsx 的回答，而目前最新的 react-router-dom 6.22.2 的版本中使用的 createBrowserRouter 却没有说怎么样重定向。

> 最后还是通过看官方文档找到答案，也随着回忆起了之前不知道在哪看过的视频也说到了。

```javascript
// 一开始的写法
// 从 react-router-dom 中引入 redirect
{
  path: '/',
  redirect: '/home', // 这个根本就没有用
  element: <Label />,
  children: [
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/charts',
      element: <Charts />
    },
    {
      path: '/upload/:type',
      element: <Upload />
    }
  ]
},
```

```javascript
// 最终成功的写法

  {
    path: '/',
    element: <Label />,
    children: [
      {
        index: true,// 设置了这个 index 就不要再设置 path了，并且之后 tab 页中跳转的路由也是直接使用 '/'
        element: <Home />
      },
      {
        path: '/charts',
        element: <Charts />
      },
      {
        path: '/upload/:type',
        element: <Upload />
      }
    ]
  },
```

