const connectToMongo = require('./db'); //mongo connection established
var cors = require('cors');

connectToMongo(); //calling connectToMongo
const express = require('express'); // importing express
const app = express(); //making app as alias of express keyword
app.use(express.urlencoded({extended: true}));
const PORT = 6500; //port number on local host on which we want to listen
app.use(cors());
app.use(express.json());
app.use('/tasks',require('./routes/TasksRoute'));
//listen to port

app.listen(PORT, () => {
console.log(`server is running on port ${PORT}`);
});
