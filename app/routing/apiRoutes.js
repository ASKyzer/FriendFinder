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

    var friendsName;
    var friendsPhoto;
    var friendsScores;

    var totalDifference = 0

    var scoreDifferences = []


    for (var i = 0; i < friends.length; i++) {

      var totalDifference = 0

      friendsName = friends[i].name
      friendsPhoto = friends[i].photo
      friendsScores = friends[i].scores

      for (var j = 0; j < 10; j++) {

        totalDifference += Math.abs(parseInt(friendsScores[j]) - parseInt(userScores[j]))

        scoreDifferences.push(totalDifference)
      } // end of for loop j

    } // end of for loop i
    console.log(totalDifference);
    console.log(scoreDifferences);

    // push the survey into frendsData array
    friends.push(req.body)

  }) // end of app.post

} // end of module.exports function
