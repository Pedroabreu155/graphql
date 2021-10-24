const { ApolloServer, gql } = require('apollo-server');

// toda requisição é tipo POST
// toda requisição é feita para mesma rota (/graphql)

// Query -> obter informações (GET)
// Mutations -> manipular informações (POST/ PATCH/ PUT/ DELETE)

// Scalar types = String, Int, Boolean, Float e ID

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    active: Boolean!
  }

  type Post {
    _id: ID!
    title: String!
    content: String!
    author: User!
  }

  type Query {
    hello: String
    users: [User!]!
    getUserByEmail(email: String): User!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
  }
`;

const users = [
  {
    _id: String(Math.random()),
    name: 'Pedro',
    email: 'pedro@email.com',
    active: true,
  },
  {
    _id: String(Math.random()),
    name: 'Miguel',
    email: 'miguel@email.com',
    active: false,
  },
  {
    _id: String(Math.random()),
    name: 'Larissa',
    email: 'lari@email.com',
    active: true,
  },
];

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
    users: () => users,
    getUserByEmail: (_, args) => {
      return users.find((user) => user.email === args.email);
    },
  },
  Mutation: {
    createUser: (_, args) => {
      const newUser = {
        _id: String(Math.random()),
        name: args.name,
        email: args.email,
        active: true,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen()
  .then(({ url }) => console.log(`Server is running at ${url} 🔥`));
