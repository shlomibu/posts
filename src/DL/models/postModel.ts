import {Schema,model, Document} from "mongoose";

const postSchema =new Schema(
    {
        tytle:{
            type:String,
            require:true
        },
        text:{
            type:String,
            require:true
        },
        img:{
            type:String
        },
        creator:{type: Schema.Types.ObjectId}

    }
)
export interface PostInteface extends Document{
    tytle:string,
    text:string,
    creator?:string,
    img?:string
}


export default model<PostInteface>("posts",postSchema)