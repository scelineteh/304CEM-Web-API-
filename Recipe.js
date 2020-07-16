const mongoose = require('mongoose');
const db = 'mongodb+srv://celine:celine1222@cluster0-wspuy.mongodb.net/SearchRecipe?retryWrites=true&w=majority';

//Connect to MongoDB database
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.log('Error connecting to database: ', error);
  });


const searchSchema = mongoose.Schema({
  search : {type: String},
})

const search = mongoose.model('search_history', searchSchema, 'search_history');

module.exports.search = search;
