const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
    {
        projName: { type: String },
        price : {type : Number},
        description: { type: String }
    },
    { timestamps: true }
);

module.exports.Project = mongoose.model("Project", ProjectSchema);
