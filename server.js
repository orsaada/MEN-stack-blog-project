const express = require("express");
const routermy = require("./routes/articles");
const app = express();

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/", routermy);

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.listen(5000);
