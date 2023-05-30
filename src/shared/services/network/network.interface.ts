import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface INetworkService {
	request<T>(requestConfig: AxiosRequestConfig<unknown>): Promise<AxiosResponse<T, unknown> | void>;
}
