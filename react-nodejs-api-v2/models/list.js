const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const list = Schema({
  b_id: String,
  b_start_date: String,
  b_title: String,
  b_end_date: String,
  b_end_check: Boolean,
  b_cancel: Boolean,
});

module.exports = mongoose.model("list", list);
