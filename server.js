const express = require('express')
const app = express()
const server = require('http').Server(app)
const PORT = 3000
const { v4: uuidV4 } = require('uuid')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
  }))  


app.get('/', (req, res) => {
    res.redirect(`/join`)
})

app.get('/join', (req, res) => {
    res.render('login')
})

app.post('/submit-login', (req, res) => {
    let name = `${req.body.firstname} ${req.body.lastname}`
    let room = req.body.roomname
    console.log(name)
    res.redirect(`/chat/?room=${room}&name=${name}`)
})

app.get('/chat', (req, res) => {
    res.render('chatroom', { roomId: req.query.room, name: req.query.name})
})

app.get('/invite', (req, res) => {
    res.render('invite', { roomId: req.query.room })
})

server.listen(PORT)

