import {createContainer} from "unstated-next";
import {AppSettings} from "../config";
import axios from "axios"
import React, {useMemo, useState} from "react";

const _axiosConfig = {
    baseURL: AppSettings.baseUrl,
    responseType: 'json',
    withCredentials: true,
    method: "post",
    mode: 'cors',
    timeout: 3000,
    changeOrigin: true,
    // proxy: {
    //     host: '127.0.0.1', port: 8888
    // },
};
const AxiosContainer = createContainer(({axiosFilter = {}, httpCodeFilter = {}}) => {
    const [axiosConfig, setAxiosConfig] = useState(_axiosConfig);
    const [onFulfilled,setOnFulfilled]=useState();
    const AxiosInstance = useMemo(() => {
        axios.create(axiosConfig)
        AxiosInstance.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
        AxiosInstance.interceptors.response.use(function (response) {
            if (response.data && response.data.code === -1) {
            }
            return response;
        }, function (error) {
            return Promise.reject(error);
        });
    }, [_axiosConfig])
    return {axios: AxiosInstance}
})
export default AxiosContainer;

export const withAxiosContainer = ({axiosFilter = {}, children, ...rest}) => (Component) => (
    <AxiosContainer.Provider initialState={{axiosFilter}}>
        <Component {...rest}>{children}</Component>
    </AxiosContainer.Provider>
)
