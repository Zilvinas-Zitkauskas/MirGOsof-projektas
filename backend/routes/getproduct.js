const { get: getproduct } = require('../db/product');
const { readFile } = require('fs/promises');

async function getProduct (req, res) {
    await(getproduct());
        const json = JSON.parse(
            await readFile('./database.json', 'utf-8')
          );
          console.log(json);
          res.status(200).send(json);  
    
    
}

module.exports = {
    getProduct
}