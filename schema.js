export const  typeDefs =`#graphql
 type Game {
    id:ID,
    title:String!,
    platform:[String!]!,
   #  every game will have review or not
   reviews:[Review!]
   
 }

 type Review{
    id:ID!
    rating:ID!
    content:String!,
   #  every review is associated with a game and author
   author:Author!
   game: Game!
   
 }

 type Author{
    id: ID!
    name:String!
    verified:Boolean!
    reviews:[Review]!
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

 type Mutation {
   deleteGame(id:ID!):[Game]
 }



`

// int,float,string,boolean,ID