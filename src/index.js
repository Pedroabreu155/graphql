const { ApolloServer, gql } = require('apollo-server');

// toda requisição é tipo POST
// toda requisição é feita para mesma rota (/graphql)

// Query -> obter informações (GET)
// Mutations -> manipular informações (POST/ PATCH/ PUT/ DELETE)

// Scalar types = String, Int, Boolean, Float e ID

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
