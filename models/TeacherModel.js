const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    profilePic: String,
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
    }],
}, { timestamps: true });

const TeacherModel = mongoose.model('Teacher', TeacherSchema);

module.exports = TeacherModel;
