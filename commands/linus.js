
const Discord = require('discord.js');
module.exports = {
	name: 'linus',
	description: 'linus champ',
	execute(message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor('#ffc0cb')
        .setTitle('pogchamp')
        .setImage("https://i.imgur.com/Mt5Flut.png");
        message.channel.send(embed);
	},
};