const fs = require('fs')
const path = require("path");

module.exports = {
  CAFFEE_GET: (_, res) => {
    try {
      const data = fs.readFileSync(path.join(__dirname, '..', 'model', 'restaurants.json'))
      res.render('eating.ejs', { data });
    } catch (err) {
      res.sendStatus(500);
    }
    console.log(data);
  },
  CAFFEE_POST: (req, res) => {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "model", "restaurants.json")));
      const { name, category, logo } = req.body
        
      data.push({
        id: data.at[data.length - 1]?.id + 1 || 1,
        name,
        category,
        logo
      });

      fs.writeFileSync(
        path.join(__dirname, "..", "model", "restaurants.json"),data, null, 4);

      res.redirect("/kafelar");
    } catch (err) {
      res.sendStatus(500);
    }
  },
};
  
