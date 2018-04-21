let friendsArry = require("./../data/friends");

module.exports = (app) => {   
    app.get("/api/friends", (req, res) => {
        return res.json(friendsArry);
    })

    app.post("/api/friends", (req, res) => {
        // handle incoming survey results.
    })
}