// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as _ from "lodash";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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

      //check db if email exist
      //then save user to db
      //TODO: setup db

      return res.status(200).send({
        succcess: true,
        message: "Sucessfully Registered",
        data: {
          email,
          creationDate: new Date().toISOString(),
          //accessToken should be here
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
