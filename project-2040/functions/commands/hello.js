const lib = require('lib')({token: process.env.STDLIB_TOKEN});
/**
* /hello
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  callback(null, {
    text: `Hello, my name is WokeBot.  <@${user}>...\nI am a conscious bot that checks racist ass people. The person who called me said ${text}`,
    attachments: [
      // You can customize your messages with attachments.
      // See https://api.slack.com/docs/message
	{
            "fallback": "Required plain-text summary of the attachment.",
            "color": "#0A03B2",
            "pretext": "",
            "author_name": "Project2040",
            "author_link": "http://www.code2040.org/early-career-accelerator-program/",
            "author_icon": "http://flickr.com/icons/bobby.jpg",
            "title": "Apply to Code2040's Fellows Program!",
            "title_link": "http://www.code2040.org",
            "text": "Sign up here!",
	    "image_url": "https://i.imgur.com/e8wlR1f.jpg",
            "thumb_url": "https://i.imgur.com/e8wlR1f.jpg",
            "footer": "WokeMiss API",
            "footer_icon": "https://i.imgur.com/3lZjo8b.jpg",
            "ts": 123456789
        }
	]
  });
};
