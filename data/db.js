// TODO: Set up your Mongoose connection here.
/* Mongoose Connection */
const mongoose = require("mongoose");
assert = require("assert");

const url = "mongodb://localhost/db";
mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  { useNewUrlParser: true },
  function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to database");
    console.log(url);

    // db.close(); turn on for testing
  }
);
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;