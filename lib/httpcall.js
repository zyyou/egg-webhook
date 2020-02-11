"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 发http请求
 * @param url 地址
 * @param data 请求数据
 * @param method 请求方式 POST（默认）、GET、PUT等
 */
async function httpCall(app, url, data, method = 'POST') {
    let reqRes = {};
    try {
        reqRes = await app.curl(url, {
            method: method,
            timeout: 5000,
            contentType: "json",
            dataType: "json",
            data
        });
    }
    catch (e) {
        reqRes.status = 500;
        reqRes.data = e;
        reqRes.code = e.code;
        app.logger.warn('httpCall error ', e, reqRes);
    }
    // app.logger.debug('httpCall', url, reqRes.status, reqRes.data);
    let retVal = {
        success: reqRes.status === 200,
        message: reqRes.code,
        data: reqRes.data,
        code: reqRes.status
    };
    if (reqRes.status !== 200) {
        app.logger.warn("服务请求异常", url, reqRes);
    }
    return retVal;
}
exports.httpCall = httpCall;
