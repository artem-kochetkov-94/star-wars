import axios, { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { INetworkService } from "./network.interface";

export class NetworkService implements INetworkService {
  // public async get<T>(
  //   url: string,
  //   config?: AxiosRequestConfig<any> | undefined
  // ): Promise<AxiosResponse<T, any> | void> {
  //   try {
  //     const result = await axios.get<T>(url, config);
  //     return result;
  //   } catch (e) {
  //     this.handleNetworkError(e);
  //   }
  // }

  async request<T>(
    requestConfig: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<T, any> | void> {
    try {
      const result = await axios<T, AxiosResponse<T, any>, any>(requestConfig);
      return result;
    } catch (e) {
      this.handleNetworkError(e);
    }
  }

  private handleNetworkError = (e: unknown): void => {
    if (isAxiosError(e)) {
      console.log("Network error");
    } else if (e instanceof Error) {
      console.log(e.message);
    }
  };
}
