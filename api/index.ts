import Express from "express";
const routes = require("./routes/index");

var app = Express();

app.use("/api", routes);

export default app;
