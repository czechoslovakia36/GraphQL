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
        // Query single data
        review(_,args){
            return _db.reviews.find((review) => review.id ===args.id )
        }
        ,  author(_,args){
            return _db.authors.find((author) => author.id ===args.id )
        },
        game(_,args){
            return _db.games.find((game) => game.id ===args.id )
        }
        
    },
    Game: {
        reviews(parent){
            return _db.reviews.filter((r) => r.game_id ===parent.id)
        }
    },
    Author: {
        reviews(parent){
            return _db.reviews.filter((r) => r.author_id ===parent.id)
        }
    },
    Review:{
        author(parent){
            return _db.authors.find((a)=> a.id ===parent.author_id)
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