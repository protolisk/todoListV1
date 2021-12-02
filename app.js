//jshint esversion:8
// -----boiler plate --- //

const express = require("express");
const https = require("https");
const date = require(__dirname+"/date.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static("public"));
// ---- end of boiler plate ---- //
let items = ["Buy food", "Cook food", "Eat food"];
let workItems = [];

// -----This is for EJS setup after npm install ejs---- //

//app.set('views', path.join(__dirname, 'views')); //ettől crashelünk épp.. de nélküle is működik
app.set('view engine', 'ejs');
//app.use('/', indexRouter); //ettől crashelünk épp.. de nélküle is működik

// -----End of EJS setup---- //

app.get("/", function(req, res){
    /*
    // --- solution with switches instead of toLocaleDateString --- //
    let currentDay = today.getDay();
    //let day ="";

    switch (currentDay) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      default:
        console.log("Error: timewarp. Current day =" + currentDay);
        break;
    }
    // --- end of solution with switches instead of toLocaleDateString --- //

    */
    let day = date.getDate();
    res.render("list", {listTitle: day, newListItems: items});

    //res.sendFile(__dirname + "/index.html");
        
});
//--- post req to add new item --- //
app.post("/",function(req,res){

  let item = req.body.newItem;
  //console.log(req.body); //only used to identify what var we could use.
  if(req.body.button === "Work"){
    
    workItems.push(item);
    res.redirect("/work");
  }else{
    
    items.push(item);
    res.redirect("/");
  }
});

//--- end of post req to add new item --- //

// --- app gets --- //
app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req,res){
  res.render("about");
});

// --- end of app gets --- //

app.listen(3000, function()
{
    console.log("Server is running on port 3000");
});