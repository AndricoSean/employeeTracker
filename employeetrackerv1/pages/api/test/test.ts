// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //test api route
  if (req.method === "GET") {
    return res.status(200).send({ message: "Cool" });
  } else {
    return res.status(400).send({ message: "BAD REQUEST" });
  }
}
