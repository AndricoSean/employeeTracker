// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  email: string;
  password: string;
  dateLoggedIn: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //test api route
  if (req.method === "POST") {
    const email = req.body.email;
    const password = req.body.password;

    const validEmail = isEmail(email);

    if (!validEmail) {
      return res.status(400).send({
        success: false,
        message: "Invalid Email",
      });
    }

    const body = {
      dateLoggedIn: new Date().toISOString(),
      email,
      password,
    };

    //check db if email exist
    //TODO: setup db

    return res.status(200).send(body);
  }
}

function isEmail(email: string) {
  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (email !== "" && email.match(emailFormat)) {
    return true;
  }

  return false;
}
