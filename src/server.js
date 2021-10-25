import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

export const startServer = ({ typeDefs, resolvers }) => {
  mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`Server running at ${url} 🔥`));
};
