var Producte = require("../../models/producte");

var app = require("express").Router();

app.get("/", function (req, res, next) {
    console.log("Entra!");
    Producte.find(function (err, productes) {
        if (err) {
            return next(err);
        }
        res.json(productes);
    });
});


app.get("/:id", function (req, res, next) {
    Producte.find({
        "codi": req.params.id
    }, function (err, productes) {
        if (err) {
            return next(err);
        }
        console.log(productes);
        res.json(productes);
    });
});


app.delete("/:id", function (req, res, next) {
    Producte.remove({codi: req.params.id}, function (err) {
        if (err){
            return next(err);
        }else{
             
            console.log("Producte amb codi " + req.params.id + " esborrat!");
            res.status(201).json("Producte borrat!");
        }            
    })
});


app.put("/", function (req, res, next) {
    Producte.findByIdAndUpdate(req.body._id, req.body, function (err) {
        if (err) {
            return next(err);
        }
        res.json({
            "missatges": "Producte modificat"
        });
    });

});


app.post("/", function (req, res, next) {
    var producte = new Producte({
        codi: req.body.codi,
        nom: req.body.nom,
        seccio: req.body.seccio,
        preu: req.body.preu
    });

    producte.save(function (err, producte) {
        if (err) {
            return next(err);
        }
        res.status(201).json(producte);
    });

});

app.get("/seccio/:seccio", function (req, res, next) {
    console.log(req.params.seccio);
   Producte.find({"seccio": req.params.seccio}, function (err,producte) {
        if (err){
            return next(err);
        }else{
          
            res.status(201).json(producte);
        }            
    })
});


app.get("/preu/:preu", function (req, res, next) {
    console.log(req.params.seccio);
   Producte.find({"preu": {$lte: req.params.preu} }, function (err,preu) {
        if (err){
            return next(err);
        }else{
          
            res.status(201).json(preu);
        }            
    })
});

module.exports = app;