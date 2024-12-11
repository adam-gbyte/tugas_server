const db = require('../config/config_db');

const getAllStudents = async () => {
    const [rows] = await db.query('SELECT * FROM siswa');
    return rows;
};

const getStudentById = async (id) => {
    const [rows] = await db.query('SELECT * FROM siswa WHERE id = ?', [id]);
    return rows[0];
};

module.exports = {
    getAllStudents,
    getStudentById
};

// const addStudent = async (student) => {
//     const { name, email, phone } = student;
//     const [result] = await db.query(
//         'INSERT INTO siswa (name, email, phone) VALUES (?, ?, ?)',
//         [name, email, phone]
//     );
//     return result;
// };