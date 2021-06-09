import mongoose from 'mongoose';
const categorySchema = mongoose.Schema({
    name: {
        type: String,
        strim: true,
        maxLength: 32,
        required: true,
        unique: true
    }

}, { timestamps: true });
module.exports = mongoose.model("Category", categorySchema)