const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pirate must have a name"],
    },
    image: {
        type: String,
        required: [true, "Pirate must have an image"]
    },
    chests: {
        type: Number,
        required: [true, "Please enter the number of chests you have"],
        min: [0, "Cannot have negative treasure chests"]
    },
    catchPhrase: {
        type: String,
        required: [true, "Pirate must have a catch phrase"]
    },
    position: {
        type: String,
        required: [true, "Pirate must have a position"]
    },
    pegLeg: {
        type: Boolean,
        required: [true, "Do you have a peg leg or no?"]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Do you have an eye patch or no?"]
    },
    hookHand: {
        type: Boolean,
        required: [true, "Do you havea a hook hand or no?"]
    }
}, {timestamps:true})

const Pirate = mongoose.model("Pirate", PirateSchema)
module.exports = Pirate