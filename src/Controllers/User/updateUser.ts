import { User } from "../../db";
import { IntUsers } from "../../Interface/interfaces";

const updateUser = async (_id: string, props: IntUsers) => {
  try {
    const update = await User.findOneAndUpdate({ _id: _id }, props, {
      new: true,
      // upsert: true,
    });

    console.log("soy update:", update);

    if (update === null || !update) {
      throw new Error(`User ${_id} not found`);
    } else {
      return update;
    }
  } catch (err: any) {
    return err.message;
  }
};

export default updateUser;
