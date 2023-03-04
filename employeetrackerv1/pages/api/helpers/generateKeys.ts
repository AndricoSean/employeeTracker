const crypt = require("crypto");

// !DO NOT TOUCH THIS
const key1 = crypt.randomBytes(32).toString("hex");
const key2 = crypt.randomBytes(32).toString("hex");
console.log("🚀 ~ file: generateKeys.ts ~ line 3 ~ key1", key1);
console.log("🚀 ~ file: generateKeys.ts ~ line 5 ~ key2", key2);

export {};
