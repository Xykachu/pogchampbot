
const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'available commands list!',
	execute(message, args) {
        const embed = new Discord.MessageEmbed()
        .setColor('#eca6ff')
        .setTitle('Available Commands:')
        .setDescription(`(Use > before commands)`)
        .addField("Pogchamp",`>Pogchamp (asks how you are)`)
        .addField("Actions:","Pat | Slap | Hug  + @mention")
       .addField("Random fun:","Sheep | Blasty | Linus | Pun")
        .addField("Games:",`>rps (rock paper scissors)`)
        message.channel.send(embed);
	},
};