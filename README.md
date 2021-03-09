# Note-Taker
 Unit 11 Express Assignment. UW Coding Boot Camp.


## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.


* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


## Table of Contents
  * [User Story](#user-story)
  * [Acceptance Criteria](#acceptance-criteria)
  * [Questions](#questions)
  * [License](#license)
  * [Deployment and Repository](#deployment-and-repository)



## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.


## Acceptance Criteria

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.


## Questions 
Questions or concerns? Feel free to reach out on [GitHub](https://github.com/bfourGitHub) or via email at <bfourbryan@gmail.com>


## License

[MIT License](./LICENSE)


## Deployment and Repository

[Deployed Heroku Application](https://note-taker-moreno.herokuapp.com/)

[Github Repository](https://github.com/bfourGitHub/Note-Taker)