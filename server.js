const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express();

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Articles",
      //   createAt: Date.now(),
      createAt: new Date(),
      description: "Test Description",
    },
    {
      title: "Test Articles",
      //   createAt: Date.now(),
      createAt: new Date(),
      description: "Test Description",
    },
  ];
  //   res.render("index", { articles: articles });
  res.render("articles/index", { articles: articles });
});

app.use("/articles", articleRouter);

app.listen(5000);
