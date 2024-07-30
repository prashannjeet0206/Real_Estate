import newUser from "../Models/user.model.js";
import bcrypt from "bcryptjs";

export const Signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const createUser = await newUser.create({
      name,
      email,
      password: hashedPassword,
    });
    res
      .status(201)
      .json({ success: true, message: "New user Created", data: createUser });
  } catch (error) {
    next(error);
  }
};
