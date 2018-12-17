/**
* @Author: fiyc
* @Date : 2018-12-17 13:45
* @FileName : Summary.js
* @Description :
*     - 总数组件
*/

import React, { Component} from 'react';
import {PropTypes} from 'prop-types'


/**
 * 傻瓜组件
 *    - 无状态
 *    - 只负责渲染页面
 */
function Summary({ total }) {
    return (
        <div>Total Count: {total}</div>
    );
}

class SummaryContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = this.getSummary();
    }

    componentDidMount = () => {
        this.context.store.subscribe(this.onUpdate);
    }

    getSummary = () => {
        const status = this.context.store.getState();
        let sum = 0;
        for (let key in status) {
            sum += status[key];
        }

        return {
            sum
        };
    }

    componentWillUnmount = () => {
        this.context.store.unsubscribe(this.onUpdate);
    }

    onUpdate = () => {
        this.setState(this.getSummary());
    };

    render() {
        return (
            <Summary total={this.state.sum} />
        );
    }
}


SummaryContainer.contextTypes = {
    store: PropTypes.object
}
export default SummaryContainer;