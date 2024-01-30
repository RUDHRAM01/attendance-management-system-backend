const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    profilePic: String,
    department: String,
    semester: String,
    collegeId: String,
    address: String,
    fatherName: String,
    motherName: String,
    fatherPhone: String,
    motherPhone: String,
    semester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Semester',
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
    },
    attendances: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Attendance',
    }],
}, { timestamps: true });

const StudentModel = mongoose.model('Student', StudentSchema);

module.exports = StudentModel;