/**
* @Author: fiyc
* @Date : 2018-12-19 14:56
* @FileName : actions.js
* @Description :
*     - 天气组件 ations
*/

/**
 * action类型常量
 */
export const actionTypes = {
    /**
     * 开始请求
     */
    REQUEST_START: "WEATHER/REQUEST_START",
    /**
     * 请求成功
     */
    REQUEST_SUCCESS: "WEATHER/REQUEST_SUCCESS",

    /**
     * 请求失败
     */
    REQUEST_FAILED: "WEATHER/REQUEST_FAILED"
};


/**
 * 请求体生成
 */
export const actions = {
    start: cityCode => ({
        type: actionTypes.REQUEST_START,
        cityCode
    }),

    success: response => ({
        type: actionTypes.REQUEST_SUCCESS,
        response
    }),

    failed: error => ({
        type: actionTypes.REQUEST_FAILED,
        error
    }),

    fetchWeather: cityCode => {
        return dispatch => {
            const url = `/data/cityinfo/${cityCode}.html`;
            dispatch(actions.start(cityCode));

            fetch(url).then(response => {
                if(response.status !== 200){
                    throw new Error(`Fail to get response with status ${response.status}`);
                }

                response.json().then(data => {
                    dispatch(actions.success(data));
                }).catch(error => {
                    dispatch(actions.failed(error));
                });

            }).catch(error => {
                dispatch(actions.failed(error));
            });
        }
    }
}

