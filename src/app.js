const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 8000;
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
// hah 
hbs.registerPartials(partialsPath);
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("index", {
    pageName: "ABout US",
  });
});
app.get("/weather", (req, res) => {
  res.render("weather",{
      pageName:"Weather"
  });
});
app.get("*", (req, res) => {
  res.send("THis is404 error page ");
});
app.listen(8000, () => {
  console.log("listening at port " + port);
});
