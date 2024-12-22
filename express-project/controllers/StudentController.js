// TODO 3: Import data students dari folder data/students.js
const student = require('../data/students')

// Membuat Class StudentController
class StudentController {
  // Menampilkan data student
  index(req, res) {
    const response = {
      message: "Menampilkan semua data students",
      data: student
    }
    res.json(response)
  }

  // Menambahkan data student
  store(req, res) {
    const nama = req.body.nama || req.query.nama;

    if (!nama) {
      return res.status(400).json({message: `Nama wajid diisi`})
    }

    student.push(nama);
    const response = {
      message: `Menambahkan data student:${nama}`,
      data: student
    }
    res.json(response);
  }

  // Memperbarui data student
  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    // Error message
    if (id < 0 || id >= student.length) {
      return res.status(404).json({ message: "Data student tidak ditemukan"})
    }

    // Mengedit data
    student[id] = nama;
    const response = {
      message: `Mengedit student id ${id}, nama: ${nama}`,
      data: student
    }
    res.json(response);
  }

  // Menghapus data student 
  destroy(req, res) {
    const { id } = req.params;

    // Validasi id
    if (id < 0 || id >= student.length) {
      return res.status(404).json({ message: "Data student tidak ditemukan" });
    }

    // Menghapus data student berdasarkan id
    student.splice(id, 1);
    const response = {
      message: `Menghapus student id ${id}`,
      data: student
    };
    res.json(response);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;