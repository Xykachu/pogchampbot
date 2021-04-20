const Discord = require('discord.js');
module.exports = {
	name: 'sheep',
	description: 'beep beep',
	execute(message, args) {
            const embed = new Discord.MessageEmbed()
            .setColor('#ffc0cb')
            .setTitle('Beep Beep')
            .setImage(url="https://pa1.narvii.com/6533/fcf4a5d1f1f32d95d180647060d41c586d6688b0_hq.gif");
            message.channel.send(embed);
	},
};
