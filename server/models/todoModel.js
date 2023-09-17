const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    completed: {
      type: Boolean,
    },

    title: {
      type: String,
      required: true,
    },

    subTitle: {
      type: String,
    },

    notes: {
      type: String,
    },

    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;
