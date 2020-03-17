module.exports = function (sequelize, DataTypes) {
    var Score = sequelize.define('Score', {
        userName: {
            type: DataTypes.STRING,
        },
        userScore: {
            type: DataTypes.INTEGER,
        },
       
        
    
    });
    return Score;
};


