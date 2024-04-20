const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.render("clients/admin/index")
  }) 
router.get('/edit', (req, res) => {
    res.render("clients/admin/editUser")
  })  
router.get('/delete', (req, res) => {
    res.render("clients/admin/delete")
  }) 
router.get('/login', (req, res) => {
    res.render("clients/admin/login")
  })  
router.get('/add', (req, res) => {
    res.render("clients/admin/addUser")
  })      

module.exports = router