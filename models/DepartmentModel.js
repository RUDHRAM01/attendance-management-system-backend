const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name: String,
    hod: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hod',
    },
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
    semesters: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Semester',
    }],
}, { timestamps: true });

const DepartmentModel = mongoose.model('Department', DepartmentSchema);

module.exports = DepartmentModel;