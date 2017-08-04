let mongoose = require("mongoose");
let fs = require("fs");

mongoose.Promise = global.Promise;
//  change link to
mongoose.connect("mongodb://localhost/exam4", { useMongoClient: true });

let models_path = __dirname + "/../models";

fs.readdirSync(models_path).forEach(function(file) {
  if (file.includes(".js")) {
    console.log(`loading ${file} . . .`);
    require(`${models_path}/${file}`);
  }
});
