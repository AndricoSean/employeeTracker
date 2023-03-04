// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as _ from "lodash";
const User = require("../models/User");
const { signAccessToken } = require("../helpers/jwtHelper");
import connectDB from "../middleware/mongodb";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const email = req.body.email;
      const password = req.body.password;

      if (_.isEmpty(req.body)) {
        return res.status(400).send({
          success: false,
          message: "Bad Request! Empty parameters",
        });
      }

      if (_.isEmpty(email) || _.isEmpty(password)) {
        return res.status(400).send({
          success: false,
          message: "Both parameters are required",
        });
      }

      const validEmail = isEmail(email);

      if (!validEmail) {
        return res.status(400).send({
          success: false,
          message: "Invalid Email",
        });
      }

      const existingUser = await User.findOne({ email: email });

      if (existingUser) {
        return res.status(400).send({
          success: false,
          message: "User already exist",
        });
      }

      const creationDate = new Date().toISOString();

      const user = new User({
        email,
        password,
        creationDate,
      });

      const savedUser = await user.save();
      const accessToken = await signAccessToken(savedUser.id);

      return res.status(200).send({
        succcess: true,
        message: "Sucessfully Registered",
        data: {
          email,
          creationDate,
          accessToken,
        },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  } else {
    return res.status(400).send({ message: "BAD REQUEST" });
  }
}

function isEmail(email: string) {
  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (email !== "" && email.match(emailFormat)) {
    return true;
  }

  return false;
}

export default connectDB(handler);
