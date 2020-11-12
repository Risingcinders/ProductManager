const { Project } = require("../models/project.model.js");

module.exports = {
    index: (req, res) => {
        Project.find({})
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err));
    },
    show: (req, res) => {
        Project.findOne({ _id: req.params.id })
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err));
    },
    create: (req, res) => {
        Project.create(req.body)
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err.errors));
    },
    update: (req, res) => {
        Project.findOneAndUpdate({ _id: req.params.id }, req.body, {
            runValidators: true, useFindAndModify:false
        })
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err.errors));
    },
    destroy: (req, res) => {
        Project.deleteOne({ _id: req.params.id })
            .then((a) => res.json({results : a}))
            .catch((err) => res.json(err.errors));
    },
};
