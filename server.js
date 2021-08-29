//require express
const express = require("express");
//require path
const path = require("path");
//require db.json
const db = require("./db/db.json")

//define express as app
let app = express();

//define port for local and heroku
let PORT = process.env.PORT || 3000

//middle ware for static files
app.use(express.static('public'))
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//define first get for / to direct to /public/index.html
app.get("/", (req, res) => {
    //serving the index using path to join the paths
    res.sendFile(path.join(__dirname, "./public", "index.html")); 

});

//define get for /notes to serve notes.html
app.get("/notes", (req, res) => {
    //serving the index using path to join the paths
    res.sendFile(path.join(__dirname, "./public", "notes.html"))   
});

//define get for /api/notes
app.get("/api/notes", (req, res) => {
    res.json(db)
})
//define post for /api/notes
//define delete for /api/notes

//define listen
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}/`)
});
