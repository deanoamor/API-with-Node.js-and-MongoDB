//response helper for json
const response = require('../helper/response-template');

//use for get data by id
// const ObjectId = require('mongodb').ObjectId;

//model
const Mahasiswa = require('../models/Mahasiswa');


module.exports = {

//function for get data mahasiswa
getMahasiswa : async function (req,res) {
  try{
    let id = req.query.id;

    //get by id
    if(id) {
      let dataByID = await Mahasiswa.findById(id);
      if(!dataByID){
        res.status(404)
        .res.send(response.notFound('Data not found'));

        return;
      }
      res.status(200)
      .send(response.success('Data Mahasiswa get successfully', dataByID));

      return;
    }

    //get all data
    let dataALL = await Mahasiswa.find();
    res.status(200)
    .json(response.success('Data Mahasiswa get successfully', dataALL));

  }catch(err){
    res.status(400)
    .json(response.failed('Failed get data', err));
  }
},

//function for create data mahasiswa
createMahasiswa : async function (req,res) {
  try{
    let nama = req.body.nama;
    let email = req.body.email;
    let mhsarraycreate = [];

    for(let i = 0; i < nama.length; i++) {
      let mhsobj = {
        nama: nama[i],
        email: email[i]
      };
      mhsarraycreate.push(mhsobj);
    }

    let data = await Mahasiswa.create(mhsarraycreate);
    res.status(200)
    .send(response.success("Data Mahasiswa created successfully", data));
  }catch(err){
    res.status(400)
    .send(response.failed("Data Mahasiswa create failed", err));
  }
},

//function for update data mahasiswa
updateMahasiswa : async function (req,res) {
  try{
    let id = req.body.id;
    let nama = req.body.nama;
    let email = req.body.email;

    let cekdata = await Mahasiswa.findById(id);
    if(!cekdata) {
      res.status(404)
      .send(response.notFound('Data not found'));
      return;
    }

    await Mahasiswa.updateOne({
      _id: id
    },
    {
      $set: {
        nama: nama,
        email: email
      }
    })

    let data = await Mahasiswa.findById(id);

    res.status(200)
    .send(response.success("Data Mahasiswa updated successfully", data));
  }catch(err){
    res.status(400)
    .send(response.failed("Data Mahasiswa update failed", err));
  }
},

//function for delete data mahasiswa
deleteMahasiswa : async function (req,res) {
  try{
    let id = req.body.id;

    let cekdata = await Mahasiswa.findById(id);
    if(!cekdata) {
      res.status(404)
      .send(response.notFound('Data not found'));
      return;
    }

    await Mahasiswa.deleteOne({
      _id: id
    })

    res.status(200)
    .send(response.success("Data Mahasiswa deleted successfully" , cekdata));

  }catch(err){
    res.status(400)
    .send(response.failed("Data Mahasiswa delete failed", err));
  }

},

}