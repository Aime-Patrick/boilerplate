import { users } from "../dummyData/data.js";
const userResolver = {
    Query: {
        users: () => {
            return users;
        },
        user: (parent, args) => {
            return users.find(user => user._id === args.userId);
        },
    },
    Mutation: {
    }
}

export default userResolver;