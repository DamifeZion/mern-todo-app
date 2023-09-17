const mongoose = require("mongoose");

//Models import
const todoModel = require("../models/todoModel");

const getAllTodo = async (req, res) => {
  try {
    const todos = await todoModel.find().sort({ createdAt: -1 });

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getOneTodo = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Task not found" });
    }

    const todo = await todoModel.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ data: todo });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const addTodo = async (req, res) => {
  const { completed, title, subTitle, notes } = req.body;

  try {
    const user_id = req.user._id;
    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    const newTodo = await todoModel.create({
      completed,
      title,
      subTitle,
      notes,
      user_id
    });

    res.status(201).json({
      message: "Task created successfully",
      data: newTodo,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const editTodo = async (req, res) => {
  const { id } = req.params;
  const { completed, title, subTitle, notes } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Task not found" });
    }

    const updatedTodo = await todoModel.findByIdAndUpdate(
      id,
      {
        completed,
        title,
        subTitle,
        notes,
      },
      {
        new: true,
      }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Task not found" });
    }

    res
      .status(200)
      .json({ message: "Task updated successfully", data: updatedTodo });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: "Task not found" });
    }

    const deletedTodo = await todoModel.findByIdAndRemove(id);

    if (!deletedTodo) {
      return res.status(404).json({ message: "Task not found" });
    }

    res
      .status(200)
      .json({ message: "Task deleted successfully", data: deletedTodo });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllTodo,
  getOneTodo,
  addTodo,
  editTodo,
  deleteTodo,
};
