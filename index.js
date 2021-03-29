const express = require('express')   //package.json에 express 모듈을 가져옴
const app = express()                //가져온 express로 app을 만듬
const port = 5000                    //사용할 포트

const mongosse = require('mongoose')
mongosse.connect('mongodb+srv://metal:guswns123@cluster0.bigt8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDb Connected'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!')) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))