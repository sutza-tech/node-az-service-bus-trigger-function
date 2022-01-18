
import { dbConfig } from "./db";
import { logConfig } from "./logs";

const isProduction = process.env.IS_PRODUCTION === "true";

export {
  isProduction,
  dbConfig,
  logConfig
}