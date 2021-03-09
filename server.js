var express = require("express");
//require the fs module to import it.
var fs = require("fs");
var path = require("path");
// Required Moment to add a `timeStamp` when a pst requires and id
var moment = require("moment");
var timeStamp = moment().format("x");



var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/notes", function (req, res) {

    // Use the fs module to read the file
    fs.readFile(path.join(__dirname + "/db/db.json"), function (err, data) {
        if (err) {
            throw err;
        };

        // THEN parse the file contents with json.parse() to get the real data
        var infoRead = JSON.parse(data);

        // send the parsed data back to the client with res.json()
        res.json(infoRead);

    });
});

app.post("/api/notes", function (req, res) {

    // Access the POSTed data in `req.body` add an id to post
    var addNewNote = req.body
    addNewNote.id = timeStamp;

    // Use the fs module to read the file
    fs.readFile(path.join(__dirname + "/db/db.json"), function (err, data) {
        if (err) {
            throw err;
        };
        
        // THEN parse the file contents with json.parse() to get the real data
        var notesAdded = JSON.parse(data);
                
        // PUSH the `req.body` to the array list
        notesAdded.push(addNewNote);

        // JSON.stringify() the array list back into a JSON string
        var stringifyNotesAdded = JSON.stringify(notesAdded);

        // THEN save the contents back to the `db.json` with the fs module
        fs.writeFile(path.join(__dirname + "/db/db.json"), stringifyNotesAdded, function (err) {
            if (err) {
                throw err;
            };
            res.json(notesAdded);
        });

    });

});

app.delete("/api/notes/:id", function (req, res) {

    // Access the :id from the `req.params.id`
    var noteToDelete = req.params.id;
    
    // Use the fs module to read the file
    fs.readFile(path.join(__dirname + "/db/db.json"), function (err, data) {
        if (err) {
            throw err;
        };
        // THEN parse the file contents with json.parse() to get the real data
        var listOfNotes = JSON.parse(data);
        
        // Option A
        // Find the matching index using .findIndex()
        // Remove the target element using .splice()
        
        // Option B
        // Use the Array.filter() method to filter out the matching element
        var listOfNotesFilter = listOfNotes.filter((note) => {
            return note.id != noteToDelete
        });

        var stringifyNotesFiltered = JSON.stringify(listOfNotesFilter);
        // myarray = myarray.filter( element => element.id !== req.params.id );
        //arrayOfNotes = arrayOfNotes.filter( element => element.id !== req.params.id );

        //reWRITE the file without the filtered note
        fs.writeFile(path.join(__dirname + "/db/db.json"), stringifyNotesFiltered, function (err) {
            if (err) {
                throw err;
            };
            res.json(stringifyNotesFiltered);
        });

        
        // Return a success message.
        console.log("Success. Your Note was deleted.");
    });


})

app.get("/notes", function (req, res) {

    //Return the contents of the notes.html
    res.sendFile(path.join(__dirname, "/public/notes.html"));

});

app.get("*", function (req, res) {

    //Return the contents of the index.html
    res.sendFile(path.join(__dirname, "/public/index.html"));

});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});