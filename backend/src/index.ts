import express from "express"
import fs from "fs"
import { buildSchema } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';

const app = express();
const port = 8080; // default port to listen

// fix the path later
const rawSchema = fs.readFileSync(__dirname + "/../src/schema.graphql").toString();
const schema = buildSchema(rawSchema)
const rootValue = {
  ping: () => {
    return "Pong!!"
  }
}

app.get("/", (req, res) => {
  res.send('Hello, world!')
})
app.get( "/status", ( req, res ) => {
  res.send( JSON.stringify({ok: true}) );
} );

app.all(
  "/graphql",
  createHandler({ schema, rootValue }),
)

// start the Express server
app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );
