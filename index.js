const app = require("./api/index")

app.listen(process.env.PORT || 8080, async () => {
	try {
		console.log("Server running!");
	} catch (err) {
		console.log(err);
	}
});
