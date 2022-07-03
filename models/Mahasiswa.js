const mongoose = require('mongoose');
const schema = mongoose.Schema;

const MahasiswaModel = new schema({
    nama:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
});


module.exports = Mahasiswa =  mongoose.model('mhs', MahasiswaModel);