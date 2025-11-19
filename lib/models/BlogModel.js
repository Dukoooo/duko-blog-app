import mongoose from "mongoose";

const StepSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
});

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  authorImg: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  steps: {
    type: [StepSchema],
    required: true,
  },
});

