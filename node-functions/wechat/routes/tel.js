import express from 'express';
import { push } from '../api/bark.js';
import { getTokenCache } from '../config/index.js';

const router = express.Router();

router.post('/tel/receive', async (req, res) => {
    console.log(req.body)
    // {
    //     devId: '3cdc7508',
    //     slot: 2, // 1表示卡槽1；2表示卡槽2
    //     type: 501,
    //     netCh: 0, //哪个网络通道推送。0:WIFI; 1:SIM1; 2:SIM2
    //     msgTs: 1768917129,
    //     imsi: '460115873',
    //     iccId: '898603',
    //     msIsdn: '18888',
    //     scName: '电信',
    //     phNum: '10685912000000000277',
    //     smsBd: '【阿里健康】您正在短信登录，验证码672484',
    //     charset: 'utf8',
    //     smsTs: 1768917129
    // }
    if (req.body.type === 501){
        push(req.body)
    }
    
    res.json({
        code: 0,
        msg: "success",
        data: {}
    });
    return 
})

router.post('/tel/record', async (req, res) => { 
    console.log(req.body)
    res.json({
        code: 0,
        msg: "success",
        data: {}
    });
    return
})

router.get('/tel/token', async (req, res) => { 
    console.log(req.body)
    res.json({
        code: 0,
        msg: "success",
        data: {}
    });
    return
})


export default router;