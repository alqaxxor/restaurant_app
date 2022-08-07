const fs = require('fs')
const path = require('path')


module.exports = {
    CLIENT_GET: (req, res) => {
      try {
        res.render("restaurant.ejs");
      } catch (err) {
        res.sendStatus(500);
      }
    }
   
  }


