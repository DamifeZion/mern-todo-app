const express = require("express");
const app = express()
const router = express.Router();

//Middleware Import
const requireAuthorization = require("../middleware/requireAuthorization");

app.use(requireAuthorization);

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

