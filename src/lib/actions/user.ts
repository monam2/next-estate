import User from "../models/user.model";

import { connect } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id: string,
  first_name: string,
  last_name: string,
  image_url: string,
  eamil_addresses: { eamil_addresses: string }[]
) => {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
          email: eamil_addresses[0].eamil_addresses,
        },
      },
      {
        upsert: true,
        new: true,
      }
    );
  } catch (error) {
    console.log("error: ", error);
  }
};

export const deleteUser = async (id: number) => {
  try {
    await connect();
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log("error", error);
  }
};
