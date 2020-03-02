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

// give the server 
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


// LISTNER: start the server
app.listen(PORT, function() {
    console.log("App is listening on PORT: ", PORT);
});