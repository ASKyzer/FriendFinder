//* DATA *//
// Link our routes to survey data, held in an array of answers.

var friendsData = require('../data/friendsData')

//* ROUTING *//

module.exports = function(app) {

  // API GET Request

  app.get('/api/survey', function(req, res) {
    res.json(friendsData)
  })

  // API POST Request

  app.post('/api/survey', function(req, res) {

    // push the survey into frendsData array
    friendsData.push(req.body)

    console.log(friendsData)
    
  })

}
