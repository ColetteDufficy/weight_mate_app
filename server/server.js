const express = require('express');
const app = express();
const cors = require('cors');
const createRouter = require('./helpers/create_router.js');
const MongoClient = require('mongodb').MongoClient;



app.use(cors());
app.use(express.json());

// returns a Promise that resolves to a client object representing the db client
MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
.then((client) => {
    // setting up variables
    const db = client.db('weight_mate');
    const programmesCollection = db.collection('programmes');
    const programmesRouter = createRouter(programmesCollection);
    
    //using the router for the 'api-ninjas' endpoint:
    app.use('/api/programmes', programmesRouter);
  })
  .catch(console.err);


app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
