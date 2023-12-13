import { Users } from "../model";

const dbInit = () => {
  Users.sync({ force: true });
};

export default dbInit;
