//* DATA *//
// Link our routes to survey data, held in an array of answers.

var friends = require('../data/friends')
var path = require('path')

//* ROUTING *//

module.exports = function(app) {

  // API GET Request

  app.get('/api/friends', function(req, res) {

    res.json(friends)

  }) // nd of app.get

  // API POST Request

  app.post('/api/friends', function(req, res) {

    var userData = req.body
    var userName = userData.name
    var userPhoto = userData.photo
    var userScores = userData.scores

    var difference;
    var totalDifference = 1000000 // total difference is a high number to start comparisobn

    var perfectMatch;


    for (var i = 0; i < friends.length; i++) {
      var difference = 0

      for (var j = 0; j < 10; j++) {
        // get the difference between the userscore and friends scosres in positive numbers with Math.abs
        difference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]))
        // console.log(difference);
      } // end of for loop j
      // console.log(difference);
      // console.log(totalDifference);

      if (difference < totalDifference) {
        totalDifference = difference
        perfectMatch = i
      }
      // console.log(perfectMatch);

    } // end of for loop i

    var yourPerfectMatch = friends[perfectMatch]
    // console.log(yourPerfectMatch);

    res.json(yourPerfectMatch)
    // push the survey into frendsData array
    friends.push(userData)

  }) // end of app.post

} // end of module.exports function
