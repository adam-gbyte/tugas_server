const studentModel = require('../models/user_models');

const getAllStudents = async (req, res) => {
    try {
        const students = await studentModel.getAllStudents();
        res.json({ success: true, data: students });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await studentModel.getStudentById(id);
        if (student) {
            res.json({ success: true, data: student });
        } else {
            res.status(404).json({ success: false, message: 'Student not found' });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

module.exports = {
    getAllStudents,
    getStudentById
};

// const addStudent = async (req, res) => {
//     try {
//         const newStudent = req.body;
//         const result = await studentModel.addStudent(newStudent);
//         res.json({ success: true, data: result });
//     } catch (err) {
//         res.status(500).json({ success: false, message: err.message });
//     }
// };