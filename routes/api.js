const request = require('request');

module.exports = (app) => {
  app.get('/', (req,res) => {
    console.log(req.query)
    const apiKey = process.env.BR_API_KEY
    const options = {
      method: 'get',
      url: `https://api.dc01.gamelockerapp.com/shards/global/matches?`,
      qs: req.query,
      headers: {
        'Authorization': apiKey,
        'Accept': 'application/vnd.api+json'
      }
    }

    request(options, (err, response, body)=>{
      res.json(JSON.parse(body));
    })
  })
}