// load data
const db = require("../db/db.json");

function apiRoutes(app) {
    // GET /api/notes - read the db.json file and return all saved notes as JSON
    app.get("/api/notes", function(req, res) {
        res.json(db);
    });
}

module.exports = apiRoutes;