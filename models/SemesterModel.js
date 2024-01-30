const mongoose = require('mongoose');

const SemesterSchema = new mongoose.Schema({
    name: String,
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
    },
}, { timestamps: true });

const SemesterModel = mongoose.model('Semester', SemesterSchema);

module.exports = SemesterModel;