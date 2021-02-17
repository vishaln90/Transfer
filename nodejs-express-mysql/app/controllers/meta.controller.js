const Meta = require("../models/meta.model.js");

exports.get_html_meta = (req, res) => {
const character_value = req.params.character_value;
  //console.log(character_value);

  Meta.get_html_meta(character_value, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || err
      });
    else res.send(data);
  });
};

exports.get_css_meta = (req, res) => {
const character_value = req.params.character_value;
  //console.log(character_value);

  Meta.get_css_meta(character_value, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || err
      });
    else res.send(data);
  });
};

exports.get_input_box_meta = (req, res) => {
const character_value = req.params.character_value;
  //console.log(character_value);

  Meta.get_input_box_meta(character_value, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || err
      });
    else res.send(data);
  });
};

exports.get_palette_buttons = (req, res) => {
const character_value = req.params.character_value;
  //console.log(">>>>>",character_value);

  Meta.get_palette_buttons(character_value, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || err
      });
    else res.send(data);
  });
};

exports.get_subtype_div = (req, res) => {
const character_value = req.params.character_value;
  //console.log(">>>>>",character_value);

  Meta.get_subtype_div(character_value, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || err
      });
    else res.send(data);
  });
};