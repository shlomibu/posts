import postModel, { PostInteface } from "../models/postModel";

export const getAll = async (): Promise<PostInteface[]> => await postModel.find()


