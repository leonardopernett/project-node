

const express = require('express')


const app = express()

app.get('/',(req,res) => {
  res.send('hello world node')
})


app.listen(3000,() => {
  console.log('server on port 3000')
})
