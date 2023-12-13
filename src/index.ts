import sequelize from "./config/database";
import Express from "express";

const routes = require("./routes/index");
// import dbInit from "./api/config/db_init";

var app = Express();

app.use("/api", routes);

app.listen(process.env.PORT || 8080, async () => {
  try {
    console.log("Server starting!");
    await sequelize.authenticate();
    // dbInit();
    console.log("Server running!");
  } catch (err) {
    console.log(err);
  }
});

export default app;
