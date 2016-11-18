const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const models = require('./models');
const routes = require('./routes');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.use('/', function(err, req, res, next) {
  if (err) {
    res.status(404);
    console.error(err);
    res.render('error');
  }
});







models.db.sync({})
  .then(function(){
    app.listen(3000, function (err) {
      if (err) return console.error(err);
      console.log('Server listening on port 3000!')
    });
  });
