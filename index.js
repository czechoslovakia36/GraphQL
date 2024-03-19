import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"

// Server setup


const server = new ApolloServer({
    // typeDef --definations of types of data
    //resolvers

})

const { url } = await startStandaloneServer(server,{
    listen: {port:4000}
})


console.log("Server reay at port",4000)