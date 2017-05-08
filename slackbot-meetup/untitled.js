var botkit = require('botkit').slackbot()

controller.spawn({
  token: process.env.SLACK_TOKEN
}).startRTM(function(err) {
  if (err) throw new Error(err)
  console.log('Connect to Slack!');
  })
  
  var count = {}
  
  controller.hears('hi', 'direct_message, direct_mention', function (bot, message) {
    bot.reply(message, 'hello')
  })
  
  controller.hears('.*', 'mention', function (bot, message) {
    bot.reply(message, 'You rang?')
  })
  
  controller.hears('.*', 'ambient', function (bot, message) {
    count[message.user] = (count[message.user] || 0) + 1
    console.log(count); 
  })
