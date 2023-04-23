import fs from 'fs';
import { buildSchema } from 'graphql';

const rawSchema = fs.readFileSync(__dirname + "/../src/schema.graphql").toString();
export const schema = buildSchema(rawSchema)
export const rootValue = {
  ping: () => {
    return "Pong!!"
  }
}
