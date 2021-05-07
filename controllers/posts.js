const db = require("../models");
const Dream = db.dreams;

// Create and Save a new Dream
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Dream
  const dream = new Dream({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Dream in the database
  dream
    .save(dream)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Dream."
      });
    });
};

// Retrieve all Dreams from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Dream.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Dreams."
      });
    });
};

// Find a single Dream with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Dream.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Dream with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Dream with id=" + id });
    });
};

// Update a Dream by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Dream.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Dream with id=${id}. Maybe Dream was not found!`
        });
      } else res.send({ message: "Dream was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Dream with id=" + id
      });
    });
};

// Delete a Dream with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Dream.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Dream with id=${id}. Maybe Dream was not found!`
        });
      } else {
        res.send({
          message: "Dream was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Dream with id=" + id
      });
    });
};

// Delete all Dreams from the database.
exports.deleteAll = (req, res) => {
  Dream.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Dreams were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Dreams."
      });
    });
};

// Find all published Dreams
exports.findAllPublished = (req, res) => {
  Dream.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Dreams."
      });
    });
};
