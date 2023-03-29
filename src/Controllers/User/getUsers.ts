import { User } from "../../db";

const getUsers = async () => {
  try {
    const allUsers = await User.find({});

    if (!allUsers.length) throw new Error("No users found");

    return allUsers;
  } catch (error: any) {
    return error.message;
  }
};

export default getUsers;
