var appRouter = function(app) {
    app.get("/", function(req, res){
        return res.send(
            '<html><body><h1>Heading</h1><p>Paragraph 1</p></body></html>'
        );
    }); 
    
    app.get("/account", function(req, res){
        var accountMock = {
            "username": "nraboy",
            "password": 1234,
            "twitter": "@nraboy"
        }
        if(!req.query.username){
            return res.send({"status": "error", "message": "missing username"});
        } else if(req.query.username != accountMock.username) {
            return res.send({"status": "error", "message": "wrong username"});
        } else {
            return res.send(accountMock);
        }
    });
    
    app.post("/account", function(req, res){
        if (!req.body.username || !req.body.password || !req.body.twitter) {
            return res.send({"status": "error", "message": "missing parameter"});
        } else {        
            return res.send(req.body.username + '\n' + req.body.password + '\n' + req.body.twitter + '\n');
        }
    });
}

module.exports = appRouter;