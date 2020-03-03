// load data
const db = require("../db/db.json");
// include shortid package - generate unique id
const shortid = require("shortid");

function apiRoutes(app) {
    // GET /api/notes - read the db.json file and return all saved notes as JSON
    app.get("/api/notes", function(req, res) {
        res.json(db);
    });

    // POST /api/notes - when the user click on the save button, add the new note to db.json with generated id
    app.post("/api/notes", function(req, res) {
        const id = shortid.generate();  // initialize/assign the variable "id" with a generated unique id
        const newNote = req.body;   // get the new note that the user entered
        newNote.id = id;    // set the "id" key with the generated id
        db.push(newNote); 
        res.json(db);
    });

    // DELETE /api/notes/:id - when the user click on the delete button, remove the note with the specified id from db.json
    app.delete("/api/notes/:id", function(req, res) {
        // get the index of the object with the given id
        const noteIndex = db.findIndex(function(note) {
            return note.id === req.params.id;
        });
        // remove the note(object) from db(array) and return the array after the removal
        db.splice(noteIndex, 1);    
        res.json(db);
    });
}

module.exports = apiRoutes;