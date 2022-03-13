const fs = require("fs");
const readline = require("readline");

const dirpath = "./public/data";
if (!fs.existsSync(dirpath)) {
    fs.mkdir(dirpath);
}

const filepath = "./public/data/checklog.json";
if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, "[]", "utf-8");
}

function generateDatetime() {
    var date_ob = new Date();

    var day = ("0" + date_ob.getDate()).slice(-2);

    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    var year = date_ob.getFullYear();

    var hours = date_ob.getHours();

    var minutes = date_ob.getMinutes();

    var seconds = date_ob.getSeconds();

    var dateTime =
        day +
        "-" +
        month +
        "-" +
        year +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;

    return dateTime;
}

function writeLogBalance(amount) {
    const date = generateDatetime();
    const balance = { date, amount };
    const fileBuffer = fs.readFileSync(filepath, "utf-8");
    const balances = JSON.parse(fileBuffer);

    balances.push(balance);
    fs.writeFileSync(filepath, JSON.stringify(balances));
}

module.exports = { writeLogBalance };
