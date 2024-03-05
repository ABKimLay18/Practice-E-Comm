import userModel from "../models/userModel.js";

//Signup
export const signup = async (req, res) => {
  try {
    const { email } = req.body;
    const userExists = await userModel.findOne({ email });
    if (!userExists) {
      const user = new userModel({ ...req.body });
      await user.save();
      console.log({ userData: user });
      const token = await user.generateAuthToken();
      res.status(201).send({ user , token});
    } else {
      res.status(201).send("Email is already exists.");
    }
  } catch (error) {
    res.status(400).send({ err: error, message: "This is Error" });
  }
};
