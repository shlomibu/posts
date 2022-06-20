import {connect} from "mongoose";

const connectDB = async():Promise<void>=>{
    try {
        await connect(process.env.CONNECTION_STRING as string)
        console.log("db is connect");
        
    } catch (error:any) {
        console.log(error.message||error);
        
    }
}

export default connectDB