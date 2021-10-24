import { ApolloServer } from 'apollo-server';

export const startServer = ({ typeDefs, resolvers }) => {
  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`Server running at ${url} 🔥`));
};
