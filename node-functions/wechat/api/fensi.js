
import axios from 'axios';
import { getAccessToken } from './token.js';

export async function getFensiList(bundleId,openId = null) {
    try {
        const accessToken = await getAccessToken(bundleId);
        console.log("accessToken",accessToken);
        let url = `https://api.weixin.qq.com/cgi-bin/user/get?access_token=${accessToken}&next_openid=`;
        if(openId) {
            url += openId;
        }
        
        const response = await axios.get(url);
        
        if (response.data.total > 0) {
            return response.data;
        } else {
            console.error('获取粉丝列表失败:', response.data);
            throw new Error(`获取粉丝列表失败: ${response.data.errmsg || '未知错误'}`);
        }
    } catch (error) {
        console.error(`获取粉丝列表错误 [${bundleId || 'default'}]:`, error);
        throw error;
    }
}