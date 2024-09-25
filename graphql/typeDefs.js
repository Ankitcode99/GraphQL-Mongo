const {gql} = require('apollo-server')

module.exports = gql`
type Recipe {
    name: String
    description: String
    createdAt: String
    likes: Int
    dislikes: Int
}

input RecipeInput {
    name: String
    description: String
}

type Query {
    recipe(ID: ID!): Recipe
    getRecipes(count: Int): [Recipe]
}

type Mutation {
    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(ID: ID!): Boolean
    editRecipe(ID: ID!, recipeInput: RecipeInput): Boolean
}
`