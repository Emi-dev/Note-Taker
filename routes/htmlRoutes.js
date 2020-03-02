// include the path pacakge to get the correct file path for the html
const path = require("path");

function htmlPath(app) {
    // when the user visit the page with /notes path, show the the content of notes.html
    app.get("/notes", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // when no matching route is found, default to the content of index.html
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}

module.exports = htmlPath;