import  {Router, NextFunction,Request, Response} from "express";
import { get } from "../BL/postTascs";
import { PostInteface } from "../DL/models/postModel";

const router =Router()

async function setSuccess (req:Request,res:Response,next:NextFunction):Promise<void>{
    try {
        const result :PostInteface[]|PostInteface =await get()
        res.send(result)
    } catch (error:any) {
        res.send(error.message||error)
    }
}

router.get("/",setSuccess)

export default router