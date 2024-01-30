const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    name: String,
    semester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Semester',
    }, 
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
}, { timestamps: true });

const SubjectModel = mongoose.model('Subject', SubjectSchema);

module.exports = SubjectModel;