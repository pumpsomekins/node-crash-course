const express = require('express');

const app = express();

// register view engine;
app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
    const blogs =[
        {title: "Yoshi finds egg", snippet: 'adpwdjawdj'},
        {title: "Mario finds egg", snippet: 'adpwdjawdj'},
        {title: "How to defeat bowser", snippet: 'adpwdjawdj'},
    ];
    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog'});
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});

