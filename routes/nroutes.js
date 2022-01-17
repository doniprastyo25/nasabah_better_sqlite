'use strict'
const express = require("express");
const router  = express.Router();
const nControll = require('../controller/ncontroll')


router.get('/nasabah', nControll.controllGet);
router.post('/nasabah', nControll.controllCreate);
router.patch('/nasabah/:id', nControll.controllUpdate);
router.delete('/nasabah/:id', nControll.controllDelete);


module.exports = {
  routes : router
}