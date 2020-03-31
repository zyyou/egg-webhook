import { Application } from 'egg';
import { IReturnValue } from 'nodejs-kit';
/**
 * 获取相关函数
 * @param app Application
 * @param options 配置文件
 */
export declare function getHelper(app: Application): {
    /**
     * 发送文本消息
     * @param text 消息内容
     */
    sendText(text: string, atArr?: string[], atAll?: boolean): Promise<IReturnValue>;
} | undefined;
