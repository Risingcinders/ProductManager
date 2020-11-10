const {Project} = require("../models/project.model.js");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World",
    });
};

module.exports.createProject = (request, response) => {
    const { projName, price, description } = request.body;
    Project.create({
        projName,
        price,
        description,
    })
        .then((a) => response.json(a))
        .catch((err) => response.json(err));
};
