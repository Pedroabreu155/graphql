import { startServer } from './server';

import { typeRefs } from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

startServer({ typeDefs, resolvers });
