export const  typeDefs =`#graphql
 type Game {
    id:ID,
    title:String!,
    platform:[String!]!
 }

 type Review{
    id:ID!
    rating:ID!
    content:String!
 }

 type Author{
    id: ID!
    name:String!
    verified:Boolean!
 }
# Entry points to Graph
 type Query{
    reviews:[Review]
    review(id:ID):Review
    games:[Game]
    game(id:ID):Game
    authors:[Author]
    author(id:ID):Author
 }

`

// int,float,string,boolean,ID