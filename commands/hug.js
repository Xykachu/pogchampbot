const Discord = require('discord.js');
module.exports = {
	name: 'hug',
	description: 'hug someone uwu',
	execute(message, args) {
        const taggedUser = message.mentions.users.first();
        const responses = [
            "https://media4.giphy.com/media/Lb3vIJjaSIQWA/source.gif", 
            "https://i.pinimg.com/originals/8c/6e/e9/8c6ee940260f6cb45a4ab2c8ccb38b77.gif", 
            "https://media1.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
            "https://thumbs.gfycat.com/FrenchShimmeringAmericanmarten-size_restricted.gif",
            "https://media0.giphy.com/media/l2QDM9Jnim1YVILXa/source.gif",
            "http://31.media.tumblr.com/tumblr_m2rq4kT2eY1qkb6keo1_500.gif",
            "https://media2.giphy.com/media/JUwliZWcyDmTQZ7m9L/200.gif",
            "https://i.imgur.com/XEs1SWQ.gif",
            "https://gifimage.net/wp-content/uploads/2018/11/cute-anime-girl-hug-gif-3.gif",
            "https://img.niadd.com/article/201709/8/1000004_150433325662565.gif",
            "https://media2.giphy.com/media/LHIRwG1tytH20/giphy.gif",
            "https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif",
            "https://i.pinimg.com/originals/6c/26/cc/6c26cc8164712b7f54980070199b8e7f.gif",

        ];

        if(taggedUser ==null){
            const embed = new Discord.MessageEmbed()
            .setColor('#6cf0df')
            .setTitle(`${message.author.username} hugs..themeselves..`)
            .setImage(url=`https://media0.giphy.com/media/ArLxZ4PebH2Ug/200.gif`)
            message.channel.send(embed);
        }
        else {
            const embed = new Discord.MessageEmbed()
            .setColor('#6cf0df')
            .setTitle(`${message.author.username} hugs ${taggedUser.username} ..`)
            .setImage(url=`${responses[Math.floor(Math.random() * responses.length)]}`)
            message.channel.send(embed);
        }
	},
};
