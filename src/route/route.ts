
import { Router } from "express";
import { getComments, getPosts } from "../controller/controller";
const endpoint = Router();


endpoint.get("/api/comments", getComments);
endpoint.get("/api/posts", getPosts);

export default endpoint;