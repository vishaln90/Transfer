const sql = require("./db.js");

// constructor
const Points = function(points) {
  this.sample_id = points.sample_id;
  this.line_number = points.line_number;
  this.word_number = points.word_number;
  this.character_number = points.character_number;
  this.character_value = points.character_value;
  this.point_number = points.point_number;
  this.point_type = points.point_type;
  this.section_type = points.section_type;
  this.section_subtype = points.section_subtype;
  this.capital = points.capital;
  this.x = points.x;
  this.y = points.y;
  this.character_id = points.character_id;
};

Points.create = (newPoints, result) => {
  //console.log("newPoints:"+newPoints.sample_id);
  var sqlQuery = sql.query("INSERT INTO graph_schema.points SET ?", newPoints, (err, res) => {
    if (err) {
      //console.log("Query:"+sqlQuery.sql);
      console.log("error: ", err);
      result(err, null);
      return;
    }
    //console.log("created characters: ", { id: res.insertId, ...newCharacters });
    result(null, { id: res.insertId, ...newPoints });
  });
};

module.exports = Points;