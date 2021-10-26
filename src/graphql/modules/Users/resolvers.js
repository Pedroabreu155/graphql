import User from '../../../models/User';

export default {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
    user: async (_, { id }) => {
      const user = await User.findById(id);
      return user;
    },
  },
  Mutation: {
    createUser: (_, { data }) => User.create(data),
    updateUser: (_, { id, data }) => {
      User.findOneAndUpdate(id, data, { new: true });
    },
    deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id)),
  },
};
