import  {Router, NextFunction,Request, Response} from "express";
const router =Router()

function setSuccess(req:Request,res:Response,next:NextFunction):void{
    res.send("success")
}

router.get("/",setSuccess)

export default router