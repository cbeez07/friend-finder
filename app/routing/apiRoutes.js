let friendsArry = require("./../data/friends");

module.exports = (app) => {   
    app.get("/api/friends", (req, res) => {
        return res.json(friendsArry);
    })

    app.post("/api/friends", (req, res) => {
        // handle incoming survey results.
        // best match variabl with name, and photo 
        // pull out the user array for scores.
        // loop through user score and friends score
        let bestMatch = {
            bestName: '',
            bestPhoto: '',
            bestDifference: 50
        }
        console.log(req.body.scores);
        let userData = req.body;
        let difference = 0;


        for (let i = 0; i < friendsArry.length; i++) {
            let newFriend = friendsArry[i];
            difference = 0;

            for (let h = 0; h < newFriend.scores.length; h++) {
                let friendScore = newFriend.scores[h];
                let userScore = userData.scores[h];

                difference = difference + Math.abs(parseInt(friendScore) - parseInt(userScore));
                // console.log(userScore, friendScore, difference)
            }
            // console.log(difference)
            if (difference < bestMatch.bestDifference) {
                bestMatch.bestName = newFriend.name;
                bestMatch.bestPhoto = newFriend.photo;
                bestMatch.bestDifference = difference;
                // console.log(bestMatch);
            }
            
        }
        
        console.log(bestMatch);

        return res.json(bestMatch);
        
    })
}

