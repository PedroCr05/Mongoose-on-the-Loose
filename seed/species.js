const db = require(`../db`);
const { Trait, Species } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  const raccoon = await Trait.find({ animalId: `neoguri` });
  const dolphin = await Trait.find({ animalId: `dolgolae` });
  const blueJay = await Trait.find({ animalId: `beullujei` });
  const arcticFox = await Trait.find({ animalId: `buggeug yeou` });

  const NA = `North America`;
  const CAM = `Central America`;
  const CA = `Canada`;
  const ET = `Arctic Tundra`;
  const EU = `Europe`;
  const AS = `Asia`;
  const GL = `Greenland`;
  const ISL = `Iceland`;

  const tropOcean = `Tropical Ocean`;
  const tempOcean = `Temperate Ocean`;

  const species = [
    {
      speciesName: `Raccoon`,
      scientificName: `Procyon lotor`,
      basedRegion: [NA, CAM],
      speciesImg: `https://s3.animalia.bio/animals/photos/full/original/racoon-climbing-out-of-a-tree-at-forest-grove-reservation-2014-05-11.webp`,
      speciesTrait_id: raccoon,
    },
    {
      speciesName: `Dolphin`,
      scientificName: `Cetacea`,
      basedRegion: [tropOcean, tempOcean],
      speciesImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_cxYch_PU9NSgnzLwu5o7IuQVlRjPkEeRA&s`,
      speciesTrait_id: dolphin,
    },
    {
      speciesName: `Blue Jay`,
      scientificName: `Cyanocitta Cristata`,
      basedRegion: [NA, CAM, CA],
      speciesImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRrwQtyv0dpmmmnO7nAe6e6YE7McrYjxUqA&s`,
      speciesTrait_id: blueJay,
    },
    {
      speciesName: `Arctic Fox`,
      scientificName: `Vulpes Lagopus`,
      basedRegion: [NA, ET, EU, AS, GL, ISL],
      speciesImg: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6pdG9npI7bjAU7DsXuY9W2SxZqYx3VFzT_Q&s`,
      speciesTrait_id: arcticFox,
    },
  ];
  await Species.deleteMany();
  await Species.insertMany(species);
  console.log(`
    ============================================
    =+=+=[Animals DB is currently running!]+=+=+
    ============================================
    `);
};

const run = async () => {
  await main();
  db.close();
};

run();
