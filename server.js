var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={ 
'article-one':{
    heading:'Article 1',
    title:'Article One ||RonJ',
    date:'Sep 5,2016',
    content:` 
            <p>
                This is the content for myfirst article
                This is the content for myfirst article
                This is the content for myfirst article
            </p>
            <p>
                
                This is the content for myfirst article
                This is the content for myfirst article
                
            </p> `},
'article-two':{
    heading:'Article 2',
    title:'Article Two ||RonJ',
    date:'Sep 5,2016',
    content:` 
            <p>
                This is the content for mysecond article
                This is the content for mysecond article
                This is the content for mysecond article
            </p>
            <p>
                
                This is the content for mysecond article
                This is the content for mysecond article
                
            </p> `},
'article-three':{
    heading:'Article 3',
    title:'Article Three ||RonJ',
    date:'Sep 5,2016',
    content:` 
            <p>
                This is the content for mythird article
                This is the content for mythird article
                This is the content for mythird article
            </p>
            <p>
                This is the content for mythird article
                This is the content for mythird article
                
                
            </p> `}
    
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;


var htmlTemplate = `
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name= "viewport" content="width=device-width,initial-scale=1" />
      <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
       <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
            
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
    </div>
    </body>
    
    
</html>
`;
 return htmlTemplate;   
}




app.get('/:articleName', function (req, res) {
    //articleName==article-one
    //articles[articleName]--{}content object for article one 
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
