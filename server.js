var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    article-one:{
        title:'Article-one|Nagasree D',
        heading:'Article-one',
        Date:'Aug 22 2017',
        content:'<p>This is my first ArticleThis is my first Article This is my first ArticleThis is my first Article This is my first ArticleThis is my first Article This is my first ArticleThis is my first Article This is my first ArticleThis is my first Article This is my first ArticleThis is my first Article This is my first ArticleThis is my first ArticleThis is my first ArticleThiThis is my first ArticleThis is my first Article This is my first ArticleThis is my first Article</p>'
    },
    article-two:
    {
        title:'Article-two|Nagasree D',
        heading:'Article-two',
        Date:'Aug 28 2017',
        content:'<p>This is my Second Article</p>'
    },
    article-three:
    {
        title:'Article-three|Nagasree D',
        heading:'Article-three',
        Date:'Aug 29 2017',
        content:'<p>This is my Third Article</p>'
    }
};
var htmltemplate='
<html>
    <head>
        <meta name="viewpart" content="width-device-width" initial-scale=1/>
        <link rel="stylesheet" type="text/css" href="/ui/style.css">
        </head>
        <body>
            <div class="container">
                <div>
                <a href="/">Home</a>
                </div>
            <hr>
            <h4>Article one</h4>
            <div>August 19 2017</div>
           <div>
            
            <p>This is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first Article
               This is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first Article
               This is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first Article
               This is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first Article
               This is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first Article
               This is my first Article</p>
            <p>This is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first Article
               This is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first Article
               This is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first Article
               This is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first Article
               This is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first ArticleThis is my first Article
               This is my first Article</p>
            </div>
            </div>
            </body>
</html>';
return htmltemplate;


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one', function (req, res) {

  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res) {
  
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {

  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
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
