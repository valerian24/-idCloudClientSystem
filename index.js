const balance = require("./reference/balance");
const email = require("./reference/email");
const log = require("./reference/log");

const minBalance = 5000000;

balance.getOngoingBalance((err, res) => {
    if (err) throw err;
    log.writeLogBalance(res);
    if (res < minBalance) {
        email.sendingEmail(
            "System Allert <dev.valerian@gmail.com>",
            "stefen.valerian@gmail.com",
            `Id Cloud Balance ${res}`,
            `This is id cloud system allert, your balance is ${res}`,
            (err, res) => {
                if (err) throw err;
                console.log(res);
            }
        );
    }
});
