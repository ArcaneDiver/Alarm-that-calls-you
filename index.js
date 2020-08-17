const client = require("twilio")(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

(async () => {
        try {
                const res = await client.calls.create({
                        from: process.env.PHONO_NUMBER_FROM,
                        to: "+393474528365",
                        url: "https://handler.twilio.com/twiml/EH0afca430e6f3771780e92aca407000c7"
                });
                console.log(res);
        } catch (e) {
                console.error(e);
        }
})();