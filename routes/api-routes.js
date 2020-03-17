///Dependecies///

var db =  require("../models/");

//Routes//
//=====================================
module.exports = function(app) {
    //Search for a specific Player( or all players on team the Provides the Json)
    app.get('/api/users/', function(req, res){
        db.Score.findAll({})
       .then(function(dbScore){
           res.json(dbScore)
       })
       
    })
        ///Display the Json for only that player.
        //Using the ORM to run our searches//
        
  
    ///If the user want to add a new character into the database..
    app.post('/api/users', function(req, res){
        console.log(req.body);
        //Take the request....
       // var User = req.body;
        //Create a routeName
        
       // var routeName = player.name.replace(/\s+/g,"").toLowerCase();
        //Then add the character to the database using sequelize/
        db.Score.create({
            userName: req.body.userName,
            userScore: req.body.userScore,
           

        })
        .then(function(userScore) {
            res.json(userScore);
          });
    });
}

