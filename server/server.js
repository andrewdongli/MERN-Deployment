// IMPORT AND CREATE INSTANCE OF EXPRESS 
const express = require("express");
const app = express();
const port = 8000;

// IMPORT AND USE CORS
const cors = require("cors")
app.use(cors());

// CONFIGURE EXPRESS FOR POST
app.use( express.json() );
app.use( express.urlencoded({extended: true}));

// CONFIGURE MONGOOSE
require("./config/mongoose.config")

// CREATE URLS TO LISTEN AND DEFINE THE RESPONSE
const PirateRoutes = require("./routes/pirate.routes");
PirateRoutes(app);

// RUN EXPRESS SERVER
app.listen(port, () => console.log(`Listening on port: ${port}`));