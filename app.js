const express = require('express');
const app = express();
const axios = require('axios');
const Search = require('./Recipe').search;


app.get('/getrecipe', (req,res)=>{
  var search = req.query.search == '' ? '' : req.query.search;
  
  if(req.query.search.trim() !==''){
      var model = new Search({search: req.query.search});
      model.save();
  }
  const querystr = `https://api.edamam.com/search?q=${search}&app_id=dcd9ff02&app_key=84c98f76250b673efb6239c0b01c0bf6`;

  axios.get(querystr).then(response =>{
    
    res.send(response.data)
  }).catch(err=>{
      res.send(err)
  })

})

//saving API result
app.get('/saveRecipe', (req,res)=>{
  var save = req.query.save;
  
  const querystr = `https://api.edamam.com/search?q=${save}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  axios.get(querystr).then(response =>{
    const recipe = new Recipe({
      food :  response.data.hits
    });

    recipe
      .save()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        res.status(400).json(error);
      });
  }).catch(err=>{
      res.send(err)
  })

})

// search history
app.post('/searchHistory',async (req,res)=>{
  var data = await Search.find({});
  res.send(data);
})

// get all saved data
app.get('/getAllRecipe', (req, res) => {
  Recipe.find({})  
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(400).json(error);
    });
});

// get record that selected to delete and delete it from database
app.get('/deleteSearch', async (req, res) => {
  try{
    var a = req.query.search;
    res.send(await Search.findByIdAndDelete(req.query.search));
  }catch(err){
    res.send(err)
  } 
});

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
