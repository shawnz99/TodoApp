// App starts a server and listens for connections responds for requests to the root URL (/)
// Every other path should be 404 not found (I think)
const express = require("express");
const app = express();
const port = 3000;

app.use("/static", express.static("public"));

// Embedded javascript
app.set("view engine", "ejs");

// if request is to the root url do this 
app.get('/', (req, res) => {
    res.render('todo.ejs');
});

// Opens up that ther port for listening
app.listen(port, () => { 
    console.log("Server Up and Running") 
    console.log(`App listening at https://localhost:${port}`);
});
