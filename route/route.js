//controller
const mahasiswa = require('../controller/mahasiswaController');

const express = require("express");
const router = express.Router();


//route mahasiswa
router.get("/mahasiswa/get",mahasiswa.getMahasiswa);
router.post("/mahasiswa/create",mahasiswa.createMahasiswa);
router.put("/mahasiswa/update",mahasiswa.updateMahasiswa);
router.delete("/mahasiswa/delete",mahasiswa.deleteMahasiswa);

module.exports = router;


