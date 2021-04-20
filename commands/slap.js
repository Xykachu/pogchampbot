const Discord = require('discord.js');
module.exports = {
	name: 'slap',
	description: 'slap someone.. ',
	execute(message, args) {
        const taggedUser = message.mentions.users.first();
        const responses = [
            "https://media.tenor.com/images/9e7a8a7473f6535081805f0e85b7a09f/tenor.gif", 
            "http://cdn.lowgif.com/full/a58d2aa5d2cb3809-.gif", 
            "https://media.tenor.com/images/47698b115e4185036e95111f81baab45/tenor.gif",
            "https://i.gifer.com/nK.gif",
            "https://thumbs.gfycat.com/CriminalLazyAmericanavocet-size_restricted.gif",
            "https://www.slapapokemon.com/4.gif"
        ];

        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order slap them!');
            
        } 
        else{
            const embed = new Discord.MessageEmbed()
            .setColor('#6cf0df')
            .setTitle(`${message.author.username} slaps ${taggedUser.username} ..`)
            .setImage(url=`${responses[Math.floor(Math.random() * responses.length)]}`)
            message.channel.send(embed);
            return;
        }
        
	},
};