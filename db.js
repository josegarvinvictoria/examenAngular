var mongoose = require("mongoose");
mongoose.connect("mongodb://usuari:usuari@ds041248.mongolab.com:41248/productes", function(){
    console.log("Connectat a MongoLab");
});

module.exports = mongoose;