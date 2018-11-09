
// Dependencies
let express = require("express");

// Create "express server" and let node know.
let app = express();


// Set our port.
let PORT = process.env.PORT || 8080;


// Set up for Express to handle data parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(_dirname + '/public' ));

// Create map to "route" files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Start our server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});