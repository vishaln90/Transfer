const Characters = require("../models/characters.model.js");
const Points = require("../models/points.model.js");
const Slope = require("../models/slope.model.js");
// Create and Save a new Characters
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  // Create a character
  const characters = new Characters({
    sample_id: req.body.sample_id,
    line_number: req.body.line_number,
    word_number: req.body.word_number,
    character_number: req.body.character_number,
    word_value: req.body.word_value,
    character_value: req.body.character_value,
    capital : req.body.capital,
    x_start: req.body.x_start,
    y_start: req.body.y_start,
    x_end: req.body.x_end,
    y_end : req.body.y_end,
    word_image_path : req.body.word_image_path,
    character_image_path : req.body.character_image_path,
    broader_image_path : req.body.broader_image_path,
    status : req.body.status
  });
  const source_image_full_path = req.body.source_image_full_path;
  
  // Save Characters in the database -- CALLER
  Characters.create(characters,source_image_full_path, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Characters."
      });
    else res.send(data);
  });
};
// Retrieve all Characterss from the database.
exports.findAll = (req, res) => {
  
};


exports.load_points = (req, res) => {
  if (!req.body) {res.status(400).send({message: "Content can not be empty!"});}

  const points = new Points({
    sample_id: req.body.sample_id,
    line_number: req.body.line_number,
    word_number: req.body.word_number,
    character_number: req.body.character_number,
    character_value: req.body.character_value,
    point_number: req.body.point_number,
    point_type: req.body.point_type,
    section_type: req.body.section_type,
    section_subtype: req.body.section_subtype,
    capital: req.body.capital,
    x : req.body.x,
    y : req.body.y,
    character_id: req.body.character_id
  });

  // Save Characters in the database -- CALLER
  Points.create(points, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Characters."
      });
    else res.send(data);
  });
};

exports.load_slope = (req, res) => {
  if (!req.body) {res.status(400).send({message: "Content can not be empty!"});}

  const slope = new Slope({
    sample_id: req.body.sample_id,
    line_number: req.body.line_number,
    word_number: req.body.word_number,
    character_number: req.body.character_number,
    character_id: req.body.character_id,
    character_value: req.body.character_value,
    x_from: req.body.x_from,
    y_from: req.body.y_from,
    x_to: req.body.x_to,
    y_to: req.body.y_to,
    length: req.body.length,
    angle : req.body.angle
  });

  // Save Characters in the database -- CALLER
  Slope.create(slope, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Characters."
      });
    else res.send(data);
  });
};

// Retrieve all Characterss from the database.
exports.findAll = (req, res) => {
};

// Find a single Characters with a sampleId
exports.findOne = (req, res) => {
  const character_value = req.params.character_value;
  Characters.findOne(character_value,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while finding an available Sample."
      });
    else res.send(data);
  });
};

// Update a Characters identified by the sampleId in the request
exports.updateStatusById = (req, res) => {

  if (!req.body) {
    res.status(400).send({ 
      message: "Content can not be empty!"}); 
  }
  // Create a Characters
  const characters = new Characters({
    sample_id : req.body.sample_id, // seperate with ,
    line_number : req.body.line_number, 
    word_number : req.body.word_number, 
    character_number : req.body.character_number, 
    status : req.body.status
  });
  
  Characters.updateStatusById(characters,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while updateStatusById."
      });
    else res.send(""); //res.send(data);
  });
};
// Update a Characters identified by the sampleId in the request
exports.update_character = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!"}); }
  // Create a Characters
  const characters = new Characters({
    sample_id : req.body.sample_id, // seperate with ,
    line_number : req.body.line_number, 
    word_number : req.body.word_number, 
    character_number : req.body.character_number, 
    lead_type : req.body.lead_type,
    start_type : req.body.start_type,
    main_type : req.body.main_type,
    main2_type : req.body.main2_type,
    end_type : req.body.end_type,
    trail_type : req.body.trail_type,
    connected_with_previous : req.body.connected_with_previous,
    connected_with_next : req.body.connected_with_next
  });

  Characters.update_character(characters,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while update_character."
      });
    else res.send(""); //res.send(data);
  });
};


exports.update_character = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!"}); }
  // Create a Characters
  const characters = new Characters({
    sample_id : req.body.sample_id, // seperate with ,
    line_number : req.body.line_number, 
    word_number : req.body.word_number, 
    character_number : req.body.character_number, 
    lead_type : req.body.lead_type,
    start_type : req.body.start_type,
    main_type : req.body.main_type,
    main2_type : req.body.main2_type,
    end_type : req.body.end_type,
    trail_type : req.body.trail_type,
    connected_with_previous : req.body.connected_with_previous,
    connected_with_next : req.body.connected_with_next
  });

  Characters.update_character(characters,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while update_character."
      });
    else res.send(""); //res.send(data);
  });
};


exports.update_slope = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!"}); }
  // Create a Characters
  const characters = new Characters({
    sample_id : req.body.sample_id, // seperate with ,
    line_number : req.body.line_number, 
    word_number : req.body.word_number, 
    character_number : req.body.character_number, 
    slope: req.body.slope
  });

  Characters.update_slope(characters,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while update_slope."
      });
    else res.send(""); //res.send(data);
  });
};


// Update a Characters identified by the sampleId in the request
exports.updateStatusToNull = (req, res) => {
  const character_value = req.params.character_value;
  //console.log(">>>>>>>>>>>>>>>>xxx",character_value);
  Characters.updateStatusToNull(character_value,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while reseting Characters to null."
      });
    else res.send(""); //res.send(data);
  });
 
};

exports.pendingCount = (req, res) => {
  const character_value = req.params.character_value;
  Characters.pendingCount(character_value, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while finding count of pending characters."
      });
    else res.send(data);
  });
};

// Update a Characters identified by the sampleId in the request
exports.load_point_cordinates = (req, res) => {
  const characters = new Characters({
    sample_id: req.body.sample_id,
    line_number: req.body.line_number,
    word_number: req.body.word_number,
    character_number: req.body.character_number,
    character_value : req.body.character_value,
    x : req.body.x, 
    y : req.body.y
  });
  Characters.load_point_cordinates(characters,(err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while reseting Characters to null."
      });
    else res.send(""); //res.send(data);
  });
};

// Delete a Characters with the specified sampleId in the request
exports.delete = (req, res) => {  
};

// Delete all Characterss from the database.
exports.deleteAll = (req, res) => {
};