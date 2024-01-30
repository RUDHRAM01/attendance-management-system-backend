const mongoose = require('mongoose');

const HodSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    profilePic: String,
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
    },
}, { timestamps: true });

const HodModel = mongoose.model('Hod', HodSchema);

module.exports = HodModel;