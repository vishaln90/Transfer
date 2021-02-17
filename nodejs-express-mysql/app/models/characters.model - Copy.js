const sql = require("./db.js");
const Clipper = require('image-clipper');
const canvas = require('canvas');
var sizeOf = require('image-size');

// constructor
const Characters = function(characters) {
  this.sample_id = characters.sample_id;
  this.line_number = characters.line_number;
  this.word_number = characters.word_number;
  this.character_number = characters.character_number;
  this.word_value = characters.word_value;
  this.character_value = characters.character_value;
  this.capital = characters.capital;
  this.x_start = characters.x_start;  
  this.y_start = characters.y_start;  
  this.x_end = characters.x_end;
  this.y_end = characters.y_end;
  this.character_image_path = characters.character_image_path;
  this.word_image_path = characters.word_image_path;
  this.broader_image_path = characters.broader_image_path;
  this.status = characters.status;
};

const Points = function(points) {
  this.sample_id = points.sample_id;
  this.line_number = points.line_number;
  this.word_number = points.word_number;
  this.character_number = points.character_number;
  this.character_value = points.character_value;
  this.capital = characters.capital;
  this.x = characters.x;  
  this.y = characters.y;
};

Characters.create = (newCharacters,source_image_full_path, result) => {
  console.log("newCharacters:"+newCharacters.sample_id);
  var sqlQuery = sql.query("INSERT INTO graph_schema.characters SET ?", newCharacters, (err, res) => {
    if (err) {
      console.log("Query:"+sqlQuery.sql);
      console.log("error: ", err);
      result(err, null);
      return;
    }
    //console.log("created characters: ", { id: res.insertId, ...newCharacters });
    clip_image(source_image_full_path, newCharacters.character_image_path, newCharacters.x_start, newCharacters.y_start, newCharacters.x_end, newCharacters.y_end);
    result(null, { id: res.insertId, ...newCharacters });
  });
};

Points.create = (newPoints,source_image_full_path, result) => {
  console.log("newPoints:"+newPoints.sample_id);
  var sqlQuery = sql.query("INSERT INTO graph_schema.points SET ?", newPoints, (err, res) => {
    if (err) {
      console.log("Query:"+sqlQuery.sql);
      console.log("error: ", err);
      result(err, null);
      return;
    }
    //console.log("created characters: ", { id: res.insertId, ...newCharacters });
    clip_image(source_image_full_path, newCharacters.character_image_path, newCharacters.x_start, newCharacters.y_start, newCharacters.x_end, newCharacters.y_end);
    result(null, { id: res.insertId, ...newCharacters });
  });
};

function clip_image(source_file,target_file, x_start, y_start, x_end, y_end) 
{
    
    sizeOf(source_file, function (err, dimensions) {

        var abs_max_width = dimensions.width;
        var abs_max_height = dimensions.height;

        var clip_width = (x_end-x_start)*abs_max_width/100;
        var clip_height = (y_end-y_start)*abs_max_height/100;
        
        Clipper.configure('canvas', canvas);
        Clipper(source_file, function() {

        console.log("Actual Inputs >>>",x_start, y_start, x_end, y_end)
        console.log("Files >>", source_file,target_file);

        console.log("Inputs to clipper >>>>>>>",abs_max_width*x_start/100, abs_max_height*y_start/100, clip_width, clip_height)
        this.crop(abs_max_width*x_start/100, abs_max_height*y_start/100, clip_width, clip_height)
        .toFile(target_file, function() {
            console.log('saved!');});
        });
    });
};


Characters.findById = (sample_id, result) => {
  sql.query(`SELECT * FROM characters WHERE id = ${sample_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found characters: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Characters with the id
    result({ kind: "not_found" }, null);
  });
};

Characters.getAll = result => {
  sql.query("SELECT * FROM characters", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("characters: ", res);
    result(null, res);
  });
};


Characters.findOne = (inp_character_value, result) => {
  var query_1 = `SELECT sample_id,line_number,word_number, character_number, character_value, character_image_path, word_image_path,x_start, x_end, y_start, y_end 
  FROM graph_schema.characters WHERE status ='new' and character_value = '${inp_character_value}'`;

  console.log(query_1);
  sql.query(query_1, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found characters: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Samples with the id
    result({ kind: "not_found" }, null);
  });
};


Characters.updateStatusById = (newCharacters, result) => {

var query_statement = "UPDATE graph_schema.characters SET status ='"+ newCharacters.status + 
      "', last_updated = now() WHERE sample_id = " + newCharacters.sample_id + " and line_number = " + newCharacters.line_number + 
      " and word_number = " + newCharacters.word_number+ " and character_number = " + newCharacters.character_number;
console.log(query_statement);
  sql.query(query_statement,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Samples with the id
        result({ kind: "not_found" }, null);
        return;
      }
      
      console.log("line_updated");
     //result(null, { id: id, ...samples });
     result(null, res);
    }
  );
};


Characters.updateStatusToNull = (inp_character_value,result) => {

var query_statement = `UPDATE graph_schema.characters SET status = 'new' WHERE status <> 'Complete' and character_value='${inp_character_value}'`;
console.log(query_statement);
  sql.query(query_statement,(err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
     result(null, res);
     console.log("characters_updated_to_null step complete");
    }
  );
};

Characters.pendingCount = (inp_character_value,result) => {
  var query_statement = `SELECT count(1) as 'PendingCount' FROM graph_schema.characters WHERE status is null or status 
                        <> 'Complete' and character_value='${inp_character_value}'`;

  sql.query(query_statement, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found samples: ", res[0]);
      result(null, res[0]);
      return;
    }
  });
};

Characters.remove = (id, result) => {
  sql.query("DELETE FROM characters WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Characters with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted characters with id: ", id);
    result(null, res);
  });
};

Characters.removeAll = result => {
  sql.query("DELETE FROM characters", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} characters`);
    result(null, res);
  });
};

module.exports = Characters;