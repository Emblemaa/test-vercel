import Express from "express";

import * as service from "../service/users_service";
import { UserInput } from "../models/users";

const router = Express.Router();

router.post("/create", async (req, res) => {
  const payload: UserInput = req.body;
  console.log(payload.username);
  const result = await service.create(payload);
  return res.status(200).send(result);
});

module.exports = router;
