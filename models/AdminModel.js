const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    profilePic: String,
}, { timestamps: true });

const AdminModel = mongoose.model('Admin', AdminSchema);

module.exports = AdminModel;