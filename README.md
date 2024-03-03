# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## TodoList

* [ ] 后端接口修改一下
  * [ ] 适配三种图片上传
  * [ ] 图片格式校验处理一下，防止被入侵
* [ ] 目前遇到的多图片上传的bug处理一下，为什么会返回一样的 url ？
  * [ ] 是因为时间戳相同导致返回两张一样的图片吗？（后端）
  * [ ] 还是因为前端传输问题，antd 的 action 不好用？如果是这样就自己在回调函数中执行方法。
  * [ ] 还有一个不太重要的，文件上传的顺序和我选择的顺序又是不一样了，这时候要怎么处理才能让它变成一样的顺序呢？
    * [ ] 这个问题统一解决一下，这样说不定还能写到简历中！毕竟需求也遇到了
* [ ] 将博客的图片进行更新优化，展示到页面上
* [ ] 部署前端项目到服务器上，如果可以也弄一个 Jenkins 来实现自动构建吧!
* [ ] 前端埋点的接口实现以及前端图表展示
* [ ] 
