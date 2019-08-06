// create references to express and router
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

router.get('/', function(req, res) {
    burger.all(function(burger_data) {
        console.table(burger_data);
        res.render("index", {burger_data});
    })
}); // end of router.get

router.put("/burgers/update", function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        console.log(result);
        res.redirect("/");
    }) 
}); // end of router.put

router.post("/burgers/create", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.redirect("/");
    })
}); // end of router.post


// export route so import request from server.js will work
module.exports = router; 