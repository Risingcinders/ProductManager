const ProjectController = require("../controllers/project.controller");
const { Project } = require("../models/project.model");

module.exports = function (app) {
    app.post("/api/project", ProjectController.create);
    app.get("/api/project", ProjectController.index);
    app.get("/api/project/:id", ProjectController.show);
    app.put("/api/project/:id", ProjectController.update);
    app.delete("/api/project/:id", ProjectController.destroy);
};
