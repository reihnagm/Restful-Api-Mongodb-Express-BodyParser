const express = require('express'),
      app  = express(),
      mongoose = require('mongoose'),
      port = process.env.PORT || 3000,
      bodyParser = require('body-parser'),
      todoController = require('./app/http/todoController'),
      todoRoutes = require('./routes/todoRoutes');
     
let mongourl = "mongodb://localhost:27017/Todos"; 

const mongodb = mongourl;

mongoose.connect(mongodb, { useNewUrlParser: true,  useUnifiedTopology: true });
mongoose.promises = global.Promise;

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error !"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", todoRoutes);

app.listen(port, () => console.log(`RESTful API server started on: ${port}`));
