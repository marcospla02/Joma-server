import { User } from "../../db";

const deleteUser = async (_id: string) => {
  try {
    const removeUser = await User.findByIdAndDelete({ _id: _id });

    console.log("soy remove user", removeUser);

    if (removeUser === null || !removeUser) {
      throw new Error(`User ${_id} not found`);
    } else {
      return `delete the user ${removeUser._id}`;
    }
  } catch (err: any) {
    return err.message;
  }
};

export default deleteUser;
