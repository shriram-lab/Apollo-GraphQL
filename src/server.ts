import express from 'express';
import fs from "fs";
import { port } from './config/configuration';
import { ApolloServer } from "apollo-server";
import { mergeResolvers } from 'merge-graphql-schemas';
import jwt from 'jsonwebtoken';

import QueriesTypes from "./module/index";
import UserResolvers from './module/user/query';
import TranieeResolvers from './module/trainee/query';

fs.writeFileSync('./src/schema.graphql', QueriesTypes);
const schema = fs.readFileSync('./src/schema.graphql', 'utf-8');

const resolverFun = [
    UserResolvers,
    TranieeResolvers,
];

const resolvers = mergeResolvers(resolverFun);
const typeDefs = schema;

const getUser = (token: string) => {
    try {
        if (token) {
            return jwt.verify(token, 'my-secret-from-env-file-in-prod')
        }
        return null
    } catch (err) {
        return null
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const tokenWithBearer = req.headers.authorization || ''
        const token = tokenWithBearer.split(' ')[1]
        const user = getUser(token)

        return {
            user // the generated prisma client if you are using it
        }
    },
})

server.listen(port, (err: any) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});