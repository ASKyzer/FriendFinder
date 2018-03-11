//* DATA *//
// Link our routes to survey data, held in an array of answers.

var friends = require('../data/friends')
var path = require('path')

//* ROUTING *//

module.exports = function(app) {

  // API GET Request

  app.get('/api/friends', function(req, res) {
    res.json(friends)
  })

  // API POST Request

  app.post('/api/friends', function(req, res) {

    // push the survey into frendsData array
    friends.push(req.body)
    res.json(true)

    console.log(friends)

  })

}
