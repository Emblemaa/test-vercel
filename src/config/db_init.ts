import { Users } from "../models";

const dbInit = () => {
  Users.sync({ force: true });
};

export default dbInit;
