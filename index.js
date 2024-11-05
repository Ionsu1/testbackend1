require('dotenv').config();
const express = require('express')
const app = express()
const port = 5001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
//   console.log(`Example app listening on port ${port}`)
})