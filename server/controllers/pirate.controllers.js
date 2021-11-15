const Pirate = require("../models/pirate.models");

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json(newPirate))
        .catch( err => res.status(400).json(err))
}

module.exports.allPirates = (req, res) => {
    Pirate.find()
        .then(allPirates => res.json(allPirates))
        .catch( err => res.json(err))
}

module.exports.onePirate = (req, res) => {
    const {id} = req.params
    Pirate.findOne({_id: id})
        .then(onePirate => res.json(onePirate))
        .catch( err => res.status(400).json(err))
}

module.exports.updatePirate = (req, res) => {
    const {id} = req.params
    Pirate.findByIdAndUpdate({_id: id}, req.body, {runValidators: true, new:true})
        .then(updatedPirate => res.json(updatedPirate))
        .catch(err => res.status(400).json(err))

}

module.exports.deleteOnePirate = (req, res) => {
    const {id} = req.params
    Pirate.deleteOne({_id: id})
        .then(deletedPirate => res.json(deletedPirate))
        .catch( err => res.json(err))
}