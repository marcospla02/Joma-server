import { User } from "../../db";

import { IntUsers } from "../../Interface/interfaces";

const updateUser = async (_id: string, props: IntUsers) => {
  const { favorites, cart, admin, picture } = props;
  let { name } = props;

  if (_id && typeof _id !== "string")
    throw new Error("Invalid id must be a text type");

  if (name) {
    if (typeof name !== "string")
      throw new Error("The name must be a text type");
    else {
      name = name.toLowerCase();
    }
  }

  if (admin && typeof admin !== "boolean")
    throw new Error("Admin must be a true or false value");

  if (picture && typeof picture !== "string")
    throw new Error("Picture must be a text type");

  if (favorites && !Array.isArray(favorites))
    throw new Error("The favorites  must be an array");

  if (cart && !Array.isArray(cart))
    throw new Error("The cart must be an array");

  try {
    const newUpdate = {
      name,
      favorites,
      cart,
      admin,
      picture,
    };

    const update = await User.findOneAndUpdate({ _id: _id }, newUpdate, {
      new: true,
      // upsert: true,
    });

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
