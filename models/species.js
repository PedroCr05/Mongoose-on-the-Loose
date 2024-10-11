const { Schema } = require(`mongoose`);

const MonotypicSpeciesSchema = new Schema(
  {
    speciesName: { type: String, required: true },
    scientificName: { type: String, required: true },
    basedRegion: [{ type: String, required: true }],
    speciesImg: { type: String, required: false },
    speciesTrait_id: [{ type: Schema.Types.ObjectId, ref: `speciesTrait_id` }],
  },
  { timestamps: true }
);
module.exports = MonotypicSpeciesSchema;
