const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000 
app.use(cors())

// import json 
const categoryData = require('./data/categories.json')
const newsData = require('./data/news.json')


app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/category',(req,res)=>{
    res.send(categoryData)
})


app.get('/news',(req,res)=>{
    res.send(newsData)
})

app.get('/news/:id',(req,res)=>{
    const id = req.params.id 
    const findingNews = newsData.find(n => n._id === id )
    res.send(findingNews)
})

app.get('/category/:id',(req,res)=>{
    const id = parseInt(req.params.id) ;
    if(id === 0){
        res.send(newsData)
    }else{
        const filteringNews = newsData.filter(n => parseInt(n.category_id) === id)
        res.send(filteringNews)
    }
    
})

app.listen(port , ()=>{
    console.log(`app lisining port number ${port}`)
})