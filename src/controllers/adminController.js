
module.exports = {
  ADMIN_GET: (req, res) => {
    try {
      res.render("admin.ejs");
    } catch (err) {
      res.sendStatus(500);
    }
  },
  
};


    
    