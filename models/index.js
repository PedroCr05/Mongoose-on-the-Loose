const mongoose = require(`mongoose`);
const MonotypicSpeciesSchema = require(`./species`);
const TraitSchema = require(`./traits`);

const Species = mongoose.model(`Species`, MonotypicSpeciesSchema);
const Trait = mongoose.model(`Trait`, TraitSchema);

module.exports = {
  Species,
  Trait,
};
