const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/MyWebsite.html");
})

app.post("/", function(req, res) {
    const email = req.body.email;
    const fName = req.body.name;
    const message = req.body.message;
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fName,
                    LNAME: message
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us5.api.mailchimp.com/3.0/lists/89679cc0b9";
    const options = {
        method: "POST",
        auth: "shayan:798867a92899d3e9ef05258096f2375a-us5"
    }

    const request = https.request(url, options, function(response) {
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();
    res.redirect("/");
});




app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000.");
})