'use strict'

const express = require('express')
const pendudukController = require('../controllers/penduduk.controller')
const router = new express.Router();

router.get("/halo", pendudukController.index)
router.post("/tambah", pendudukController.add)
router.put("/ubah", pendudukController.update)
router.delete("/hapus", pendudukController.delete)

module.exports = router