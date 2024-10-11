const mongoose = require(`mongoose`);

mongoose
  .connect(
    `mongodb+srv://PedroCr05:2hjmI1jKWsKbdvGq@clusters.k4z0f.mongodb.net/movie-projects?retryWrites=true&w=majority&appName=clusters`
  )
  .then(() => {
    console.log(`
        =================================
        +=[Connection Success: MongoDB]+=
        =================================
        `);
  })
  .catch((e) => {
    console.error(
      `
        ===============================
        =+=+=+ERROR SERVER CRASH]=+=+=+
        ===============================        
        `,
      e.message
    );
  });

mongoose.set(`debug`, true);

const db = mongoose.connection;

module.exports = db;
