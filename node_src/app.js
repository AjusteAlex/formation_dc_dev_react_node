const express = require('express')
const app = express()

let connect = require("./connection.js")
let config = require("./config.js")
const { Task } = require('./models/task')
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World!')

})

app.get('/todo', async (req, res) => {

  let {db_client, db_connection} = await connect()

  db_connection.collection('todo').find({}).toArray((err, result) => {

    if(err) return console.log(err)

    console.log('todo :', result)

    db_client.close()
    res.send(result)
   
  })
})

app.post('/todo/add', async(req, res) =>{
  try{
    let {db_client, db_connection} = await connect()
    const newTask = new Task({
      title: req.body.title,
    })

    const todo = await db_connection.collection('todo').insertOne(newTask)
    
    res.status(200).json(todo)

  }catch(exception){
      res.send(500)
      console.error(exception)
  }
})



app.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port} !`)
})

