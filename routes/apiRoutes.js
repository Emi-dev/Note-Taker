// load data
const db = require("../db/db.json");

// not working... ????
function apiRoutes(app) {
    app.get("/api/notes", function(req, res) {
        res.json(db);
        console.log("db: ", db);
    });
}

module.exports = apiRoutes;