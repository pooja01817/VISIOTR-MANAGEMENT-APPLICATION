const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNo: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  hostName: { type: String, required: true },
  entryTime: { type: Date, default: Date.now },
  exitTime: { type: Date },
  Purpose: { type: String }
});

const VisitorModel = mongoose.model('Visitor', visitorSchema);

module.exports = VisitorModel;
