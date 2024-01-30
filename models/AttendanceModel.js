const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    date: Date,
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
    },
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

const AttendanceModel = mongoose.model('Attendance', AttendanceSchema);

module.exports = AttendanceModel;