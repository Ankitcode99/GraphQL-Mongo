const Recipe = require('../mongo/Receipe')

module.exports = {
    Query: {
        recipe: async (parent, {ID}) => {
            console.log(parent)

            return await Recipe.findById(ID);            
        },
        getRecipes: async(_,{count}) => {
            return await Recipe.find().sort({createdAt: -1}).limit(count);
        }
    },
    Mutation: {
        createRecipe: async(_, {recipeInput: {name, description}}) => {
            const createRecipe = new Recipe({
                name: name,
                description: description,
                createdAt: new Date().toISOString(),
            })
            const res = await createRecipe.save();
            return {
                id: res.id,
                ...res._doc
            }
        },
        deleteRecipe: async(_, {ID}) => {
            const wasDeleted = (await Recipe.deleteOne({_id: ID})).deletedCount;
            return wasDeleted
        },
        editRecipe: async(_, {ID, recipeInput: {name, description}}) => {
            const wasEdited = (await Recipe.updateOne({_id: ID},{name: name, description: description})).modifiedCount;
            return wasEdited
        }
    }
}