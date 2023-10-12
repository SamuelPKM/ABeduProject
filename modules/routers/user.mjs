import express from "express";
const router = express.Router();

router.get("/getUsers", function (req, res){
    res.json([]);
})

export default router;
