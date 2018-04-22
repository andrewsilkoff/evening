var express = require("express");
var bodyParser = require("body-parser");
///var routes = require("./routes");

var app = express();


///// Data is here

var notes = [
				{
					text: "Item 1",
					id: "jhghj",
					sel: false
				},
				{
					text: "Item 2",
					id: "jeehj",
					sel: false
				},
				{
					text: "Item 3",
					id: "jhefvdhj",
					sel: false
				}
			];

//// Middleware

app.use( bodyParser.json() );
app.use( function(req, resp, next) {
	resp.setHeader("Access-Control-Allow-Origin", "*"); /// Позволяет совершать крос-доменные запросы (нужно для GET запросов)
	resp.setHeader("Access-Control-Allow-Headers", "Content-Type"); //// Тип данных, которые могут быть приняты
	resp.setHeader("Access-Control-Allow-Methods", "GET, POST"); //// Методы, которыеми эти данные могут быть приняты или отосланы
	next();
});


////// Routes

///routes(app, notes); /// Running routes from separate file Routes.js

app.get("/", function(req, resp){ /// GET = What Server will return
	resp.status(200).send(notes);
});

app.get("/ids/:objNum", function(req, resp){
	let index = req.params.objNum;
	console.log( req.params.objNum );
	resp.status(200).send(notes[index]);
});

app.post("/", function(req, resp) { /// POST Data to be accepted
	let obj = req.body;
	console.log(obj);
	notes.push(obj);
	resp.status(200).send(notes);
});





////// Server Start

app.listen(6060); /// Server Start
console.log("Server is running on port 6060");





