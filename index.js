const balance = require("./reference/balance");
const email = require("./reference/email");
const log = require("./reference/log");

const minBalance = 50000;

balance.getOngoingBalance((err, res) => {
    if (err) throw err;
    log.writeLogBalance(res);
    if (res < minBalance) {
        email.sendingEmail(
            "dev.valerian@gmail.com",
            "stefen.valerian@gmail.com",
            "Id Cloud Allert",
            `This is the allert, your balance is ${res}`,
            (err, res) => {
                if (err) throw err;
                console.log(res);
            }
        );
    }
});
