const fs = require('fs')
const path = require('path')

module.exports = {
    GET: async (_, res) => {
        try{
            const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'model', 'restaurants.json')))
            res.render('index.ejs', {data})
        
        } catch (err) {
            res.sendStatus(500)
            console.log(err.message);
        }
    },
    
}    

    
    




