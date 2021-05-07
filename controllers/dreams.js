module.exports = app => {
    const Dreams = require("../controllers/posts.js");
  
    var router = require("express").Router();
  
    // Create a new Dream
    router.post("/", Dreams.create);
  
    // Retrieve all Dreams
    router.get("/", Dreams.findAll);
  
    // Retrieve all published Dreams
    router.get("/published", Dreams.findAllPublished);
  
    // Retrieve a single Dream with id
    router.get("/:id", Dreams.findOne);
  
    // Update a Dream with id
    router.put("/:id", Dreams.update);
  
    // Delete a Dream with id
    router.delete("/:id", Dreams.delete);
  
    // Create a new Dream
    router.delete("/", Dreams.deleteAll);
  
    app.use("/api/Dreams", router);
  };