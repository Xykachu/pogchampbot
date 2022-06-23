
const Discord = require('discord.js');
module.exports = {
	name: 'howlong',
	description: 'days since dad left',
	execute(message, args) {
        const daysGone = Math.floor(Math.random() * 500);
        const responses = [
        "https://c.tenor.com/9mzrE_2Gn1kAAAAC/milk-in-your-face.gif", 
        "https://i.pinimg.com/originals/bf/2c/44/bf2c441173e401cfcb185a14bf32c655.gif", 
        "https://c.tenor.com/pRTPXrxI2UAAAAAC/crying-meme-black-guy-cries.gif",
        "https://i.pinimg.com/originals/a3/09/3c/a3093c1f3b859a41e01935cc9db46121.gif"];

            const embed = new Discord.MessageEmbed()
            .setColor('#ec8fcc')
            .setTitle(`${message.author.username} it has been ${daysGone} since dad left `)
            .setImage(url=`${responses[Math.floor(Math.random() * responses.length)]}`)
            message.channel.send(embed);
        
        
	},
};
 