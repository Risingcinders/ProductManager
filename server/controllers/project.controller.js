const { request } = require("express");
const { Project } = require("../models/project.model.js");

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

module.exports.getProjects = (request, response) => {
    Project.find({})
        .then((a) => response.json(a))
        .catch((err) => response.json(err));
};

module.exports.getProject = (request, response) => {
    Project.findOne({ _id: request.params.id })
        .then((a) => response.json(a))
        .catch((err) => response.json(err));
};

module.exports.updateProject = (req, res) => {
    Project.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then((a) => res.json(a))
        .catch((err) => res.json({ message: "update error", error: err }));
}

module.exports.deleteProject = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
        .then((a) => {
            res.json( a );
            res.redirect("/projects/")
        })
        .catch((err) => res.json({ message: "delete error", error: err }));
};
