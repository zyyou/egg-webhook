import { HttpMethod } from "urllib";
import { IJson, IReturnValue } from "nodejs-kit";
import { Application } from "egg";
/**
 * 发http请求
 * @param url 地址
 * @param data 请求数据
 * @param method 请求方式 POST（默认）、GET、PUT等
 */
export declare function httpCall(app: Application, url: string, data: IJson, method?: HttpMethod): Promise<IReturnValue>;
