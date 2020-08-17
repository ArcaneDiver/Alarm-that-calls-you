
const client = require("twilio")(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

module.exports = async (req, res) => {
        await client.calls.create({
                from: process.env.PHONO_NUMBER_FROM,
                to: process.env.PHONO_NUMBER_TO,
                url: process.env.TWIML_XML
        });
}