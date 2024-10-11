const { Species, Trait } = require(`../models`);

const getAllAnimals = async (req, res) => {
  try {
    const animals = await Species.find({});
    res.json(animals);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getAllTraits = async (req, res) => {
  try {
    const traits = await Trait.find({});
    res.json(traits);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getAnimalsById = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Species.findById(id);
    if (animal) {
      return res.json(animal);
    }
    return res.status(404).send(`That animal does not exist. Sorry!`);
  } catch (e) {
    if (e.name === `CastError` && e.kind === `ObjectId`) {
      return res.status(404).send(`That animal does not exist. Sorry!`);
    }
    return res.status(500).send(e.message);
  }
};

const getTraitsById = async (req, res) => {
  try {
    const { id } = req.params;
    const trait = await Trait.findById(id);
    if (trait) {
      return res.json(trait);
    }
    return res
      .status(404)
      .send(`The trait you searched for does not exist in our DB. Sorry!`);
  } catch (e) {
    if (e.name === `CastError` && e.kind === `ObjectId`) {
      return res
        .status(404)
        .send(`The trait you searched for does not exist in our DB. Sorry!`);
    }
    return res.status(500).send(e.message);
  }
};

const createNewSpecies = async (req, res) => {
  try {
    const species = await new Species(req.body);
    await species.save();
    return res.status(201).json({
      species,
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createNewTraits = async (req, res) => {
  try {
    const traits = await new Trait(req.body);
    await traits.save();
    return res.status(201).json({
      traits,
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const updateSpecies = async (req, res) => {
  try {
    const { id } = req.params;
    const species = await Species.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (species) {
      return res.status(200).json(species);
    }
    throw new Error(`Animal you just searched and update does not exist.`);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const updateTrait = async (req, res) => {
  try {
    const { id } = req.params;
    const trait = await Trait.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (trait) {
      return res.status(200).json(trait);
    }
    throw new Error(
      `The trait you just searched and tried to update does not exist.`
    );
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const deleteSpecies = async (req, res) => {
  try {
    const { id } = req.params;
    const speciesDeleted = await Species.findByIdAndDelete(id);
    if (speciesDeleted) {
      return res.status(200).send(`Animal has been deleted!`);
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const deleteTrait = async (req, res) => {
  try {
    const { id } = req.params;
    const traitDeleted = await Trait.findByIdAndDelete(id);
    if (traitDeleted) {
      return res.status(200).send(`Trait has been deleted!`);
    }
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = {
  getAllAnimals,
  getAllTraits,
  getAnimalsById,
  getTraitsById,
  createNewSpecies,
  createNewTraits,
  updateSpecies,
  updateTrait,
  deleteSpecies,
  deleteTrait,
};
