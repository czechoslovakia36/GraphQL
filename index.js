import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"


import { typeDefs }  from "./schema.js";
import _db from "./_db.js";
// Server setup

const resolvers = {
    Query : {
        games () {
            return _db.games
        },
        reviews(){
            return _db.reviews
        },
        authors(){
            return _db.authors
        }
    }
}


const server = new ApolloServer({
    // typeDef --definations of types of data
    //resolvers--how we respond to the queries 
    typeDefs,
    resolvers

})

const { url } = await startStandaloneServer(server,{
    listen: {port:4000}
})


console.log("Server ready at port",4000)