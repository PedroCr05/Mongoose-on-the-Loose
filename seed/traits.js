const db = require(`../db`);

const { Trait } = require(`../models`);

db.on(`error`, console.error.bind(console, `MongoDB connection error:`));

const main = async () => {
  await Trait.deleteMany();
  const traits = [
    {
      animalId: `neoguri`,
      hasFur: true,
      hasScales: false,
      hasBones: true,
      canFly: false,
      canSwim: true,
      canWalk: true,
      isOnLand: true,
      isInOcean: false,
    },
    {
      animalId: `dolgolae`,
      hasFur: false,
      hasScales: false,
      hasBones: true,
      canFly: false,
      canSwim: true,
      canWalk: false,
      isOnLand: false,
      isInOcean: true,
    },
    {
      animalId: `beullujei`,
      hasFur: false,
      hasScales: false,
      hasBones: true,
      canFly: true,
      canSwim: false,
      canWalk: true,
      isOnLand: true,
      isInOcean: false,
    },
    {
      animalId: `buggeug yeou`,
      hasFur: true,
      hasScales: false,
      hasBones: true,
      canFly: false,
      canSwim: true,
      canWalk: true,
      isOnLand: true,
      isInOcean: false,
    },
  ];

  await Trait.insertMany(traits);
  console.log(`
        ============================================
        =+=+=[Traits DB is currently running!]+=+=+
        ============================================        
        `);
};

const run = async () => {
  await main();
  db.close();
};

run();
