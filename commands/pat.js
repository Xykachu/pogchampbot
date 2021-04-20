const Discord = require('discord.js');
module.exports = {
	name: 'pat',
	description: 'pat someone uwu',
	execute(message, args) {
        const taggedUser = message.mentions.users.first();
        const responses = [
        "https://media.tenor.com/images/5b3c8ea690356c8566cebcae8fa13b9c/tenor.gif", 
        "https://media1.tenor.com/images/153e9bdd80008e8c0f94110450fcbf98/tenor.gif?itemid=10534102", 
        "https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif",
        "https://media.tenor.com/images/86fee4add43f1910ee89a7f1c75e5679/tenor.gif",
        "https://media.tenor.com/images/1da6bb86ef23dc4dff5051209843a296/tenor.gif",
        "https://66.media.tumblr.com/d743a5e5ecc65be5cb6ac8de7978fb22/tumblr_pfyit1ofSu1th206io1_500.gif"];

        if (!message.mentions.users.size) {
            return message.reply('you need to tag a user in order pat them!');
        }
        else{
            const embed = new Discord.MessageEmbed()
            .setColor('#ec8fcc')
            .setTitle(`${message.author.username} pats ${taggedUser.username} ..`)
            .setImage(url=`${responses[Math.floor(Math.random() * responses.length)]}`)
            message.channel.send(embed);
        }
        
	},
};