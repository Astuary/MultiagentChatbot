import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { DemoResolver } from "./resolvers/DemoResolver";
import { connect, connection } from "mongoose";
import { chat_initiate } from "./juji/NewChat";
import { auth1 } from "./juji/Auth";
import { get_brand, create_engagement, get_eng, update_eng, release_eng } from "./juji/Init";

(async () => {
  const app = express();

  app.use(express.static(process.env.CLIENT_PATH!));

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [DemoResolver],
      validate: true
    }),
    context: ({ req, res }) => ({ req, res })
  });

  apolloServer.applyMiddleware({ app, cors: true });

  const port = process.env.PORT || 4000;

  connect(process.env.DB_URL!, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

  connection.once('open', () => {
      console.log('Successfully connected to the database.');
  }).on('error', (err) => console.log(err));

  app.get('**', (req, res) => {
    res.sendFile(process.env.CLIENT_PATH!);
  });
  
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/graphql`);
  });

  //auth1().then(data => console.log(data));
  
  var token = await chat_initiate();
  var brand_name = await get_brand(token);
  await console.log("token: ", token, "\nBrand: ", brand_name);
  
  //await create_engagement(token, brand_name);

  //chat_initiate().then(data => get_brand(data).then(res => console.log("token: ", data, "\nBrand: ", res)));

  await get_eng(token, brand_name);
  await update_eng("60c9094a-a012-401a-9268-3b66e4352128", token);
  //await release_eng("60c9094a-a012-401a-9268-3b66e4352128", token);
})();
