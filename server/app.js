const express = require('express')
const app = express()
const PORT = 5000
const mongoose =require('mongoose')
const {MONGOURI} = require('./keys')


mongoose.connect(MONGOURI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	})

mongoose.connection.on('connected', ()=>{
	console.log("connected to mongo database")})

mongoose.connection.on('error', ()=>{
	console.log("err connecting", err)}
	)

require('./models/user')
require('./models/post')

app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


app.listen(PORT,()=>
{console.log("Server running on ",PORT)}
)
