# 组件Context
* 2018-12-17 16:42 - context提供者组件 @[src/Provider.js](#)

## Note
1. `Provider` 将渲染工作交给子组件
2. `Provider`需要提供一个`getChildContext`函数来代表`Context`对象  

```
class Provider extends Component{
    getChildContext(){
        return {
            store: this.props.store
        };
    }

    render(){
        // 将渲染交给子组件
        return this.props.children;
    }
}
```  

3. `Provider`需要定义类的`childContextTypes`并与`getChildContext`对应, 这样子组件才可以访问到`context`  

```
Provider.childContextTypes = {
    store: PropTypes.object
};
```  

4. 子组件为了能够访问`context`, 必须给类的`contextTypes`赋值, 与`Provider.childContextTypes`一致  

```
CounterContainer.contextTypes = {
    store: PropTypes.object
}
```  

5. 如果自己定义了`constructor`, 则需要在构造函数入参内加入`context`, 并且传递给父构造方法  

```
constructor(props, context) {
    super(props, context);
    this.state = this.getOwnState();
}
```