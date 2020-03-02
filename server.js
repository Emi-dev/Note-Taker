// including the express package
const express = require("express");

// tell node that we are creating an express server
const app = express();

// set an port to the environment variable PORT (created by host, eg. Heroku)
// or 8080 if there is no environment variable PORT
const PORT = process.env.PORT || 8080;

// set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// give the server a "map" of how to respond when users visit or request data from various URLs
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTNER: start the server
app.listen(PORT, function() {
    console.log("App is listening on PORT: ", PORT);
});