const PirateController = require("../controllers/pirate.controllers")

module.exports = app => {
    //CREATE
    app.post("/api/pirate/new", PirateController.createPirate)
    //READ
    app.get("/api/pirates", PirateController.allPirates)
    //READ ONE
    app.get("/api/pirate/:id", PirateController.onePirate)
    //UPDATE
    app.put("/api/pirate/:id", PirateController.updatePirate)
    //DELETE
    app.delete("/api/pirate/:id", PirateController.deleteOnePirate)
}
