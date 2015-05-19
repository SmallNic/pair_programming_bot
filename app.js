var express = require("express")
var app = express()
var routes = require("./routes")
app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))

app.listen(3000, function(){
  console.log("Hello Dave. This app is listening at http://localhost:3000/")
})


app.get("/", routes.index)
app.get("/pass", routes.pass)
app.get("/do_refactor", routes.do_refactor)
app.get("/new_feature", routes.new_feature)
app.get("/refactor", routes.refactor)
app.get("/new_feature", routes.new_feature)
app.get("/write_code", routes.write_code)
app.get("/write_test", routes.write_test)
