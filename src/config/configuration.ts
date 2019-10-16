import { config } from "dotenv";
config();
console.log(config)
export const port = process.env.PORT;
