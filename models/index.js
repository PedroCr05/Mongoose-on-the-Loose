const mongoose = requre(`mongoose`);
const SpeciesSchema = require(`./species`);
const TraitSchema = require(`./traits`);

const Species = mongoose.model(`Species`, SpeciesSchema);
const Trait = mongoose.model(`Trait`, TraitSchema);

module.exports = {
  Species,
  Trait,
};
