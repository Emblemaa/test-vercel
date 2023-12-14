import Express from "express";
const router = Express.Router();

const userRoutes = require("./users_routes");

router.use("/users", userRoutes);
router.get("/health", (_, res) => {
  try {
    res.status(200).send("TMR Backend okay");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
