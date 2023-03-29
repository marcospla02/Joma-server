import { User } from "../../db";
import { IntUsers } from "../../Interface/interfaces";

const createUser = async (props: IntUsers) => {
  try {
    const create = await User.create({
      _id: props._id,
      name: props.name,
      favorites: props.favorites,
      cart: props.cart,
      admin: props.admin,
      picture: props.picture,
    });

    return create;
  } catch (error: any) {
    return error.message;
  }
};

export default createUser;
