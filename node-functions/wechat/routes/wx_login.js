import express from 'express';
import { getAuthorizationUrl } from '../api/login.js';
const router = express.Router();

router.get('/:bundleId/wxloginurl', async (req, res) => {
    try {
        const bundleId = req.params.bundleId;
        
        let url = getAuthorizationUrl(bundleId,1,'status888')
        res.json({ 
            code: 0, 
            msg: "success", 
            data: url 
        });
    } catch (error) {
        res.status(500).json({ 
            code: 500, 
            msg: error.message 
        });
    }
});

export default router;