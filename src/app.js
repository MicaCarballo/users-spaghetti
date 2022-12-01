const express = require('express')
const db = require('./utils/database')
const userRouter = require('./users/users.router')

const port = 9000

const app = express()

app.use(express.json())
app.use('/api/v1/users', userRouter)

db.sync()
.then(()=> console.log('database sync'))
.catch((err)=> console.log(err))

db.authenticate()
.then(()=> console.log('database authenticated'))
.catch((err)=> console.log(err))


const usersDb = [];
let id = 1;
// routes /users and /users/:id



app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 
app.get('/users', (req,res)=>{
    res.status(200).json(usersDb)
})


app.listen(port ,() => {
    console.log(`Server started at port ${port}`)
})
