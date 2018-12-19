/**
* @Author: fiyc
* @Date : 2018-12-19 14:00
* @FileName : weather.js
* @Description :
*     - 获取天气信息组件
*/

import React, {Component} from 'react';

class Weather extends Component{
    constructor(props){
        super(props);

        this.state = {
            weather: "暂无信息"
        };
    }

    componentDidMount(){
        fetch(this.props.url)
        .then(response => {
            if(response.status !== 200){
                this.setState({weather: "获取天气接口请求失败"});
            }else{
                response.json()
                .then(responseJson => {
                    const w = responseJson.weatherinfo;
                    const message = `${w.city} ${w.weather} 最低温度: ${w.temp1} 最高温度: ${w.temp2}`;
                    this.setState({weather: message});
                })
                .catch(error => {
                    this.setState({weather: error.message});
                })
            }
        })
        .catch(error => {
            this.setState({weather: error.message});
        });

    }

    render(){
        return (<div>{this.state.weather}</div>);
    }
}

export default Weather;