const ProjectController = require("../controllers/project.controller");

module.exports = function (app) {
    app.get("/api", ProjectController.index);
    app.post("/api/project", ProjectController.createProject);
};
