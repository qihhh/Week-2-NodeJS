
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m002-student:m001-mongodb-basics@sandbox.5dqfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  if (err){
    console.log(err.message)
    return
  }
  console.log('Connected to MongoDB');

  client.db().admin().listDatabases().then(result =>{
    console.log(result);
  })
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
//})
})
