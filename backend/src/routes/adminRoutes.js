import express from 'express'

const router = express.Router();


router.post('/add-product' , (req , res) => {

    const {data} = req.body;

})

export default router