const ProjectController = require("../controllers/project.controller");
const { Project } = require("../models/project.model");

module.exports = function (app) {
    app.get("/api", ProjectController.index);
    app.post("/api/project", ProjectController.createProject);
    app.get("/api/projects", ProjectController.getProjects);
    app.get('/api/project/:id', ProjectController.getProject);

};
