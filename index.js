const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const categories = require('./data/categories.json')
const news = require('./data/news.json')
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('The Dragon Server is running...')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id 
    res.send(news.find(n => n._id === id))
})

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id)
    if(id === 0){
        res.send(news)
    }else{
        res.send(news.filter(n => parseInt(n.category_id) === id))
    }
})

app.listen(port, () => {
    console.log(`the app is running on port ${port}`)
})