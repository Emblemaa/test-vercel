import app from "./api/index";
import sequelize from "./api/config/database";
// import dbInit from "./api/config/db_init";

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
