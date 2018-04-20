
app.get("/api/friends", (req, res) => {
    return res.json(friendsArry);
})

app.post("/api/friends", (req, res) => {
    // handle incoming survey results.
})
