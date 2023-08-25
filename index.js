import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const todos = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    todos: todos,
  });
});

app.post("/submit", (req, res) => {
  todos.push(req.body.text);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
