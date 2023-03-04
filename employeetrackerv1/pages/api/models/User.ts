import mongoose from "mongoose";
const bcrypt = require("bcrypt");

interface IUser {
  email: string;
  password: string;
  creationDate: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  creationDate: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next: any) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.isValidPassword = async function (password: string) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(`Password doesn't match`);
  }
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
