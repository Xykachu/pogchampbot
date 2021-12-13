const Discord = require('discord.js');
module.exports = {
	name: 'shrek',
	description: 'picture of our lord',
	execute(message, args) {
        console.log("shrek");
        const embed = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('Our lord and saviour')
        .setImage("https://i2-prod.hulldailymail.co.uk/incoming/article5434416.ece/ALTERNATES/s615/1_Shrek-2.jpg")
        message.channel.send(embed)
	},
};