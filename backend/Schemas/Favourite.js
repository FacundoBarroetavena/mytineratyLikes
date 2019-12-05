var mongoose = require('mongoose');

var favouriteSchema = new mongoose.Schema({
    userID: String,
    itinID: String
  });
  
var User = mongoose.model('Favourite', favouriteSchema, 'favourites');
  
module.exports = User;