'use strict'

const req = require("express/lib/request")
const res = require("express/lib/response")
const db = require('../db')

module.exports = {
    index: (req, res) => {
        const sql = 'select * from penduduk'
        db.query(sql, (err,result) => {
            if (err) throw (err)
            res.json({
                message: "Berhasil",
                data: result
            })
        })    
  },

 add: (req, res) => {
    let penduduk = {
        nama: req.body.nama,
        alamat: req.body.alamat
    }
    db.query(`insert into penduduk set ?`, penduduk, (err, results) => {
        let response = null
        if (err) {
            response = {
                message: err.message
            }
        } else {
            res.send({
                message: "Berhasil Menambahkan Data",
                data: results
            })
        }
    })
},
update: (req, res) => {
    const id = req.params.id
    let penduduk = {
        nama: req.body.nama,
        alamat: req.body.alamat
    }
    db.query(`update penduduk set ? where id = '${id}'`, penduduk, (err, results) => {
        let response = null
        if (err) {
            response = {
                message: err.message
            }
        } else {
            res.send({
                message: "Berhasil Update Data",
                data: results
            })
        }
    })
},
delete: (req, res) => {
    const id = req.params.id
    db.query(`delete from penduduk where id = '${id}'`, (err, results) => {
        let response = null
        if (err) {
            response = {
                message: err.message
            }
        } else {
            res.send({
                message: "Berhasil Hapus Data",
                data: results
            })
        }
    })
}
}