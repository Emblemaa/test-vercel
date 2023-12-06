const Express = require("express");

var app = Express();

app.listen(process.env.PORT || 8080, async () => {
	try {
		console.log("Server running!");
	} catch (err) {
		console.log(err);
	}
});

app.get("/", (_, res) => {
	try {
		res.status(200).send("TMR Backend");
	} catch (err) {
		res.status(500).send(err);
	}
});