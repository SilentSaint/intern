const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static("public"));

app.set("view engine", "html");
app.use(bodyParser.urlencoded({
  extended: true
}));



app.get("/", function(req, res) {
  res.render("index");
});


app.listen(3000, function() {
  console.log("server running on port 3000");

});
