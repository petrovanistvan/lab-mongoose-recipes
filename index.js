const mongoose = require('mongoose');
const {Schema, Model} = mongoose;
const recipeDB = require("./data.json");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    const recipe1 = {
      title: "Sauerkraut soup",
      level: "Easy Peasy",
      ingredients: ["water", "kraut", "sauer", "salt", "pepper"],
      cuisine: "german",
      dishType: "soup",
      image: "https://www.gutekueche.at/storage/media/recipe/28115/resp/sauerkrautsuppe___webp_620_413.webp",
      duration: 60,
      creator: "Istvan and Dennis",
    };
    //Recipe.create(recipe1, (error, recipe) => {
    //  if (error) {
    //    console.log("It's not functioning:", error);
    //  }
    //  console.log("Recipe has been saved and its value is:", recipe);
    //});
    Recipe.insertMany(recipeDB) 
    //.then ((recipe) => { recipe.forEach((recipe) => {
    //  console.log(recipe.title);
    //})
    //  });
    //Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese' }, { duration: 100 })
  //.then(console.log("good"))
  //.catch(error => console.log("bad", error));
  Recipe.deleteOne({ title: 'Carrot Cake' })
  .then( deletedRecipe => console.log("good", deletedRecipe))
  .catch(error => console.log("bad", error));
 })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
