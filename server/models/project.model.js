const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
    {
        projName: { type: String, 
            required: [true, "Projects must have a name"],
            minlength: [3, "Names must be at least 3 characters"],},
        price: { type: Number, 
            required: [true, "Projects must have a price"],
            min: [1, "There's no such thing as a free lunch"],},
        description: {
            type: String,
            required: [true, "Projects must have a description"],
            minlength: [3, "Descriptions must be at least 3 characters"],
        },
    },
    { timestamps: true }
);

module.exports.Project = mongoose.model("Project", ProjectSchema);
