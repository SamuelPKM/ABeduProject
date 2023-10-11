import express from "express";
const router = express.Router();

router.get("/getComments", function(req, res){
    res.json([1,2,3]);
})

export default router;