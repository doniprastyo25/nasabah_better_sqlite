'use strict'
const nmodel = require('../model/mnasabah')

//create
const controllCreate = async(req, res) => {
  const results = await nmodel.createNasabah(req.body.nama, req.body.alamat, req.body.rekening);
  res.status(201).json({
    message : "done",
    id:results[0]
  })
}
//read
const controllGet = async (req, res) => {
  const nasabah = await nmodel.getAllNasabah();
  res.status(200).json(
    {
      status:"OK",
      message:"Get Data Success", 
      nasabah 
    }
    )
}
//update
const controllUpdate = async(req, res) => {
  await nmodel.updateNasabah(req.params.id, req.body.nama, req.body.alamat, req.body.rekening);
  res.status(200).json({message : "done"})
}

//delete
const controllDelete = async(req, res) => {
  await nmodel.deleteNasabah(req.params.id);
  res.status(200).json({message : "delete success"})
}

module.exports = {
  controllGet,
  controllCreate,
  controllDelete,
  controllUpdate
}