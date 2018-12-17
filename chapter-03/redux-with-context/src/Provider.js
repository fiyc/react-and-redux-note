/**
* @Author: fiyc
* @Date : 2018-12-17 16:42
* @FileName : Provider.js
* @Description :
*     - context提供者组件
*/

import {Component} from 'react';
import {PropTypes} from 'prop-types';


class Provider extends Component{
    getChildContext(){
        return {
            store: this.props.store
        };
    }

    render(){
        return this.props.children;
    }
}

Provider.PropTypes = {
    store: PropTypes.object.isRequired
};

Provider.childContextTypes = {
    store: PropTypes.object
};

export default Provider;