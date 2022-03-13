var request = require("request");

function getDataBalance(callback) {
    var options = {
        method: "GET",
        url: "https://api.idcloudhost.com/v1/payment/billing_account?billing_account_id=1200139883",
        headers: {
            apikey: "fmFDnrR3PKWKzqY3NDMAuAXqW063iaLU",
        },
    };
    request(options, function (error, response) {
        if (!error && response.statusCode == 200) {
            return callback(null, JSON.parse(response.body));
        }
        return callback(error, JSON.parse(response.body));
    });
}

function getOngoingBalance(callback) {
    getDataBalance(function (err, res) {
        if (err) return console.log(err);
        return callback(null, res.precalc_ongoing);
    });
}

module.exports = { getOngoingBalance };
