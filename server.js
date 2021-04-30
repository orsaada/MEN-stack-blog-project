const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/articles", articleRouter);

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

app.listen(5000);
