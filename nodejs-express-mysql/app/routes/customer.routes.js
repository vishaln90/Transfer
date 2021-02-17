module.exports = app => {

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //res.header("Access-Control-Allow-Headers", "*");
  next();
});

  const customers = require("../controllers/customer.controller.js");
  const lines = require("../controllers/lines.controller.js");
const samples = require("../controllers/samples.controller.js");
const words = require("../controllers/words.controller.js");
const characters = require("../controllers/characters.controller.js");
const meta = require("../controllers/meta.controller.js");
  // Create a new Customer
  app.post("/customers", customers.create);

  // Retrieve all Customers
  app.get("/customers", customers.findAll);

  // Retrieve a single Customer with customerId
  app.get("/customers/:customerId", customers.findOne);

  // Update a Customer with customerId
  app.put("/customers/:customerId", customers.update);

  // Delete a Customer with customerId
  app.delete("/customers/:customerId", customers.delete);

  // Create a new Customer
  app.delete("/customers", customers.deleteAll);
 
 // Create a new Customer 
  app.post("/lines", lines.create);
  app.post("/words", words.create);
  app.post("/characters", characters.create);
  app.put("/points", characters.load_points);
  app.put("/slope", characters.load_slope);

  app.get("/samples", samples.findOne);
  app.get("/samples/pendingCount", samples.pendingCount);
  app.put("/samples/updateStatusById", samples.updateStatusById);
  app.put("/samples/updateStatusToNull", samples.updateStatusToNull);
  app.get("/samples/get_source_image_path_from_sample/:sample_id", samples.get_source_image_path_from_sample);
  app.get("/samples/page_dimensions/:sample_id", samples.get_page_dimensions);

  app.get("/lines", lines.findOne);
  app.get("/lines/:sample_id/:line_number", lines.findOne);
  app.get("/lines/pendingCount", lines.pendingCount);
  app.put("/lines/updateStatusById", lines.updateStatusById);
  app.put("/lines/updateStatusToNull", lines.updateStatusToNull);

  app.get("/words", words.findOne);
  app.put("/words/updateStatusById", words.updateStatusById);
  app.put("/words/updateStatusToNull", words.updateStatusToNull);
  app.get("/words/pendingCount", words.pendingCount);
  app.put("/words/evaluate_words_to_chars", words.evaluate_words_to_chars);
  app.put("/words/update_word_value", words.update_word_value);


  app.get("/characters/:character_value", characters.findOne);
  app.put("/characters/load_point_cordinates", characters.load_point_cordinates);
  app.put("/characters/updateStatusById", characters.updateStatusById);
  app.get("/characters/pendingCount/:character_value", characters.pendingCount);
  app.put("/characters/updateStatusToNull/:character_value", characters.updateStatusToNull);
  app.put("/characters/update", characters.update_character);
  app.put("/characters/update_slope", characters.update_slope);

  app.get("/metahtml/:character_value", meta.get_html_meta);
  app.get("/metacss/:character_value", meta.get_css_meta);
  app.get("/metainputbox/:character_value", meta.get_input_box_meta);
  app.get("/metapalettebuttons/:character_value", meta.get_palette_buttons);
  app.get("/metasubtypediv/:character_value", meta.get_subtype_div);
};