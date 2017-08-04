let path = require("path");
let Users = require("./../controllers/users");
let Questions = require("./../controllers/questions");

module.exports = function(app) {
  // User  routing
  app.get("/user", Users.index);
  app.post("/user", Users.create);
  app.get("/user/:id", Users.show);
  app.delete("/user/:id", Users.logout);

  // Session routing
  app.get("/session", Users.session);

  // question routing
  app.get("/question", Questions.index);
  app.get("/question", Questions.show);
  app.post("/question", Questions.create);
  app.patch("/question/:id", Questions.update);

  // Path to the Angular Routing
  app.all("*", function(req, res, next) {
    res.sendFile(path.resolve("./public/dist/index.html"));
  });
};
