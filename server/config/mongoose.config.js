const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/pirates_db", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then( () => console.log("CONNECTED TO DATABASE") )
    .catch( err => console.log("ERROR: ", err))