const { Schema } = require(`mongoose`);

const SpeciesSchema = new Schema(
  {
    speciesName: { type: String, required: true },
    scientificName: { type: String, required: true },
    basedRegion: { type: String, required: true },
    speciesImg: { type: String, required: false },
    speciesTrait: [{ type: Schema.Types.ObjectId, ref: `speciesTrait` }],
  },
  { timestamps: true }
);
module.exports = SpeciesSchema;
