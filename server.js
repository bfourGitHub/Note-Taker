var express = require("express");
//require the fs module to import it.


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/api/notes", function(req, res) {

    // Use the fs module to read the file

    // THEN parse the file contents with json.parse() to get the real data

    // send the parsed data back to the client with res.json()
});

app.post("/api/notes", function(req, res) {

    // Access the POSTed data in `req.body`

    // Use the fs module to read the file

    // THEN parse the file contents with json.parse() to get the real data

    // PUSH the `req.body` to the array list

    // JSON.stringify() the array list back into a JSON string

    // THEN save the contents back to the `db.json` with the fs module

});

app.delete("/api/notes/:id", function(req, res) {

    // Access the :id from the `req.params.id`
    
    // Use the fs module to read the file

    // THEN parse the file contents with json.parse() to get the real data
    
    // Option A
    // Find the matching index using .findIndex()
    // Remove the target element using .splice()

    // Option B
    // Use the Array.filter() method to filter out the matching element
    // myarray = myarray.filter( element => element.id !== req.params.id );

    // Return a success message.
    
})

app.get("/notes", function(req, res) {
    
    //Return the contents of the notes.html
    res.sendFile( /** path to the notes.html */)

});

app.get("*", function(req, res) {
    
    //Return the contents of the index.html
    res.sendFile( /** path to the index.html */)

});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});