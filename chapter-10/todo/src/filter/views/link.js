/**
* @Author: fiyc
* @Date : 2018-12-18 15:40
* @FileName : link.js
* @Description :
*     - fiter 链接组件
*/

import React from 'react';
import {connect} from 'react-redux';
import {set} from '../actions';

const Link = ({active, children, onClick}) => {
    if(active){
        return (<b className="filter selected">{children}</b>);
    }else{
        return (
            <a href="#" className="filter not-selected" 
                onClick={ (ev) => {
                    ev.preventDefault();
                    onClick();
                }}>
                {children}     
            </a>
        );
    }
}

const mapState = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(set(ownProps.filter));
        }
    }
}

export default connect(mapState, mapDispatch)(Link);