'use strict'
const connect = require('../db/connect');

//create
function createNasabah(nama, alamat, rekening) {
  return connect.db.prepare('INSERT INTO nasabah (nama, alamat, rekening) VALUES(?,?,?)').run(nama, alamat, rekening)
}
//read
function getAllNasabah() {
  return connect.db.prepare('SELECT * from nasabah').all();
}
//update
function updateNasabah(id, nama, alamat, rekening) {
  return connect.db.prepare(`UPDATE nasabah SET nama='${nama}',alamat='${alamat}',rekening='${rekening}' WHERE id='${id}'`).run()
}

//delete
function deleteNasabah(id) {
  return connect.db.prepare(`DELETE FROM nasabah WHERE id = '${id}'`).run()
}

module.exports = {
  getAllNasabah,
  createNasabah,
  deleteNasabah,
  updateNasabah
}