const mongoose = require('mongoose');
const CheaperSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }
}, { timestamps: true });
module.exports.Cheaper = mongoose.model('Cheaper', CheaperSchema);