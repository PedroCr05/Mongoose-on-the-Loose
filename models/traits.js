const { Schema } = require(`mongoose`);

const TraitSchema = new Schema(
  {
    animalId: { type: String, required: true },
    hasFur: { type: Boolean, required: true },
    hasScales: { type: Boolean, required: true },
    hasBones: { type: Boolean, required: true },
    canFly: { type: Boolean, required: true },
    canSwim: { type: Boolean, required: true },
    canWalk: { type: Boolean, required: true },
    isOnLand: { type: Boolean, required: true },
    isInOcean: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = TraitSchema;
