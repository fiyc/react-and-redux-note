/**
* @Author: fiyc
* @Date : 2018-12-19 15:54
* @FileName : index.js
* @Description :
*     - 天气查询组合组件
*/

import React from 'react';
import CityChoose from './choose-city';
import WeatherShow from './weather-show';

const Show = () => {
    return (
        <div>
            <CityChoose/>
            <WeatherShow/>
        </div>
    );
}

export default Show;