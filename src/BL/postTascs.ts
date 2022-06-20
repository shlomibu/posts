import { getAll } from "../DL/controllers/postController";
import { PostInteface } from "../DL/models/postModel";

export const get =async ():Promise<PostInteface[]|PostInteface> => await getAll()
