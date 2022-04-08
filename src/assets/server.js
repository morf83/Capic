1//CONNECTION: mongodb+srv://madao:<password>@cluster0.8i6qn.mongodb.net/<dbname>?retryWrites=true&w=majority
//PASSWORD: 20RHjK1g24rCfqtc

const http = require('http');
const app = require('./app');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Thing = require('./app/models/thing');

mongoose.connect('mongodb+srv://madao:20RHjK1g24rCfqtc@cluster0.8i6qn.mongodb.net/<dbname>?retryWrites=true&w=majority')
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/stuff', (req, res, next) => {
    const thing = new Thing({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId
    });
    thing.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);


server.listen(process.env.PORT || 3000);
