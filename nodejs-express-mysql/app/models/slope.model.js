//import {sqrt} from 'mathjs';
const sql = require("./db.js");
//const math = require("//C:/Users/vnarsinghani/Desktop/Grapht/UI/Rest_API/nodejs-express-mysql/node_modules/mathjs/dist/math.js");
const {sqrt,atan2} = require('mathjs');
// constructor
const Slope = function(slope) {
  this.sample_id = slope.sample_id;
  this.line_number = slope.line_number;
  this.word_number = slope.word_number;
  this.character_number = slope.character_number;
  this.character_id = slope.character_id;
  this.character_value = slope.character_value;
  this.x_from= slope.x_from,
  this.y_from= slope.y_from,
  this.x_to= slope.x_to,
  this.y_to= slope.y_to,
  this.length= slope.length,
  this.angle= slope.angle
};

Slope.create = (newSlope, result) => {
  //console.log(sqrt(4).toString());

  //console.log("newSlope:"+newSlope.x_from);
  //newSlope.angle =1.1;
  //newSlope.angle = Math.atan2(newSlope.y_from - newSlope.y_to, newSlope.x_from - newSlope.x_to) * 180 / Math.PI
  var sqlQuery = sql.query("INSERT INTO graph_schema.slope SET ?", newSlope, (err, res) => {
    if (err) {
      //console.log("Query:"+sqlQuery.sql);
      console.log("error: ", err);
      result(err, null);
      return;
    }
    //console.log("created characters: ", { id: res.insertId, ...newCharacters });
    result(null, { id: res.insertId, ...newSlope });
  });
};

module.exports = Slope;