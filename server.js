var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

var articles={
    'articleone':{
       title:'Article-one|Nagasree D',
       heading:'Article-one',
       date:'Aug 22 2017',
       content:'<p>This is my first ArticleThis is my first Article ArticleThis is my first Article This is my first</p>'},
  'articletwo':{
        title:'Article-two|Nagasree D',
        heading:'Article-two',
        date:'Aug 28 2017',
        content:'<p>This is my Second Article</p>'},
'articlethree': {
       title:'Article-three|Nagasree D',
        heading:'Article-three',
        date:'Aug 29 2017',
    content:'<p>This is my Third Article</p>'}
};
function createTemplate(data)
{
   var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
   var htmltemplate='<html><head> <meta name="viewpart" content="width-device-width" initial-scale=1/><link rel="stylesheet" type="text/css" href="/ui/style.css"></head><body><div class="container"> <div><a href="/">Home</a></div><h4>${heading}</h4> <div>${date}</div><div>${content}</div></body></html>';
}
app.get('/',function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/:articleName', function (req, res) {
var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
