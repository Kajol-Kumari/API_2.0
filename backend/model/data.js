const mongoose = require("mongoose");

const { Schema } = mongoose;

const dataSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        anything_for_world: {
            type: String,
            required: true,
            trim: true
        }
    }
)

module.exports = mongoose.model('Data', dataSchema, 'workshop_data');
