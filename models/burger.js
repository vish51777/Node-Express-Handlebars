var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) { // calling orm.all function, passing in values from table
            cb(res);
        })
    },

    update: function(id, cb) {
        orm.update("burgers", id, cb);
    },

    create: function(name, cb) {
        orm.create("burgers", name, cb);
    }


}; // end of var burger

module.exports = burger;