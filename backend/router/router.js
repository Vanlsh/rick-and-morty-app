import {Router} from "express";

export const router = new Router()

router.get('/user',(req,res) => {
    res.status(200).json("nice")
})