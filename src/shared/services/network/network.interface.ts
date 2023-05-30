import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface INetworkService {
	// get<T>(
	//   url: string,
	//   config?: AxiosRequestConfig<any> | undefined
	// ): Promise<AxiosResponse<T, any> | void>;

	request<T>(requestConfig: AxiosRequestConfig<unknown>): Promise<AxiosResponse<T, unknown> | void>;
}
