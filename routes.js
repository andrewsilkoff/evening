module.exports = function(app, arr) {

	app.get("/", function(req, resp){
		resp.status(200).send(arr);
	});

	app.post("/addnote", function(req, resp) {
		let obj = req.body;
		console.log(obj);
		notes.push(obj);
		resp.status(200).send(arr);
	});
}