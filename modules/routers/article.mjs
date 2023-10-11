import express from "express";
const router = express.Router();

router.get("/getArticles", function(req, res){
    res.json([]);
});

export default router;