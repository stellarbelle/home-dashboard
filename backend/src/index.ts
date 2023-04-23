import express from "express"
import cors from "cors"
import { createHandler } from 'graphql-http/lib/use/express';
import { rootValue, schema } from './schema';

const app = express();
const port = 8080; // default port to listen

// fix the path later
app.get("/", (req, res) => {
  res.send('Hello, world!')
})
app.get( "/status", ( req, res ) => {
  res.send( JSON.stringify({ok: true}) );
} );

app.all(
  "/graphql",
  cors(),
  createHandler({ schema, rootValue }),
)

// start the Express server
app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );
