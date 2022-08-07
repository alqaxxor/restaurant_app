const fs = require("fs");
const path = require("path");

module.exports = {
  NATIONAL_GET: (req, res) => {
    try {
      const data = JSON.parse(
        fs.readFileSync(path.join(__dirname, "..", "model", "restaurants.json"))
      );
  
      const allCategory = data.filter((e) => e.category == "milliy");
  
      res.render("national.ejs", { allCategory });
    } catch (err) {
      res.sendStatus(500);
    }
  },
  FASTFOOD_GET: (req, res) => {
    try {
      const data = JSON.parse(
        fs.readFileSync(path.join(__dirname, "..", "model", "restaurants.json"))
      );
  
      const allCategory = data.filter((e) => e.category == "fast");
  
      res.render("fastfood.ejs", { allCategory });
    } catch (err) {
      res.sendStatus(500);
    }
  },
  
};











