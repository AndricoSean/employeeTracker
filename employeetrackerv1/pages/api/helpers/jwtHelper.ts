import type { NextApiRequest, NextApiResponse } from "next";
const JWT = require("jsonwebtoken");

module.exports = {
  signAccessToken: (userId: string) => {
    const payload = {
      iss: "employeetracker.net",
    };
    const secret = process.env.access_token_secret;
    const options = {
      expiresIn: "2h",
      audience: userId,
    };
    return new Promise((resolve, reject) => {
      // TODO: change type any
      JWT.sign(payload, secret, options, (err: any, token: string) => {
        if (err) return reject(err);
        resolve(token);
      });
    });
  },

  // TODO: Resolve this type any!
  verifyAccessToken: (req: any, res: any) => {
    if (!req.headers.authorization) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized access",
      });
    }

    const authHeader = req.headers.authorization;
    const bearerToken = authHeader.split(" ");
    const token = bearerToken[1];

    // TODO: change type any
    JWT.verify(
      token,
      process.env.access_token_secret,
      (err: any, payload: any) => {
        if (err) {
          return res.status(401).send({
            success: false,
            message: "Unauthorized access",
          });
        }
        req.payload = payload;
        //next();
      }
    );
  },
};
