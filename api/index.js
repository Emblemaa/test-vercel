const Express = require("express");

var app = Express();

app.get("/", (_, res) => {
	try {
		res.status(200).send("TMR Backend");
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = app;