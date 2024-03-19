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
        },
        review(_,args){
            return _db.reviews.find((review) => review.id ===args.id )
        }
        ,  author(_,args){
            return _db.authors.find((author) => author.id ===args.id )
        },
        game(_,args){
            return _db.games.find((game) => game.id ===args.id )
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