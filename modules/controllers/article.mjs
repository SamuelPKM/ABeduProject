export function getArticles(req, res){
    res.json([]);  
};
export function createArticle(req,res){
    console.log(req.body);
    res.send("Article created!");
};

