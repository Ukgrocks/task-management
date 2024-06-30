const moongoose = require('mongoose')
const mongoURI = "YOUR OWN MONGO URI"

const connectToMongo = ()=>{
    moongoose.connect(mongoURI).then(() => {
        console.log("Connected to Database successfully");
    })
    .catch((err) => {
        console.log(err);
    })
    

}
module.exports = connectToMongo;