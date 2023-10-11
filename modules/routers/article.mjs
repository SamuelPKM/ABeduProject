import express from "express";
const router = express.Router();
import { getArticles, createArticle } from "../controllers/article.mjs";



router.get("/createArticle", createArticle);
router.get("/getArticle", getArticles);


export default router;