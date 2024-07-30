import newUser from "../Models/user.model.js";

export const Signup = async (req, res) => {
  const { name, email, password } = req.body;
  const createUser = await newUser.create({ name, email, password });
  res
    .status(201)
    .json({ success: true, message: "New user Created", data: createUser });
};
