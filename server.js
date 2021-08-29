//require express
const express = require("express");
//require path
const path = require("path");

//define express as app
let app = express();

//define port for local and heroku
let PORT = process.env.PORT || 3000


//define listen
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/`)
});
