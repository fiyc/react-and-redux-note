# React 访问API
* 2018-12-19 14:00 - 获取天气信息组件 @[src/weather.js](#)

这里有2个需要注意的地方
## 1. fetch
* `fetch`请求返回一个`Promise`对象
* `fetch`在接受到http响应的报头部分就会调用`then`, 不会等到整个http响应完成.
* 接上一条, `response.json()`返回一个新的`Promise`

## 2. 跨域
* 开发时, 可以设置`package.json`的`proxy`指定代理host

## 3. 调用时机
* 通常在组件的`componentDidMount`函数中做请求服务器操作