import Express from "express";
const router = Express.Router();

router.get("/", (_, res) => {
  try {
    res.status(200).send("Accounts endpoint");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
