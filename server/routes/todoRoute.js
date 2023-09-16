const express = require('express')
const router = express.Router();

//Middleware Import && use
const requireAuthorization = require("../middleware/requireAuthorization");

router.use(requireAuthorization);

//Controller Import
const todoCtrl = require("../controllers/todoCtrl");

const { 
  getAllTodo, 
  getOneTodo, 
  addTodo, 
  editTodo, 
  deleteTodo 
} = todoCtrl;

router.get("/", getAllTodo);

router.get("/:id", getOneTodo);

router.post("/", addTodo);

router.put("/:id", editTodo);

router.delete("/:id", deleteTodo);

module.exports = router;

