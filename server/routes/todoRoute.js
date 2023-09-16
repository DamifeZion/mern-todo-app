const express = require('express')
const router = express.Router();

//Middleware Import
const requireAuthorization = require("../middleware/requireAuthorization");

//Controller Import
const todoCtrl = require("../controllers/todoCtrl");

const { 
  getAllTodo, 
  getOneTodo, 
  addTodo, 
  editTodo, 
  deleteTodo 
} = todoCtrl;

//Require auth for all workout routes 
router.use(requireAuthorization);

router.get("/", getAllTodo);

router.get("/:id", getOneTodo);

router.post("/", addTodo);

router.put("/:id", editTodo);

router.delete("/:id", deleteTodo);

module.exports = router;

