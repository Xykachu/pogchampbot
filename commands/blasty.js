
const Discord = require('discord.js');
module.exports = {
	name: 'blasty',
	description: 'blasty stuffs',
	execute(message, args) {
        const taggedUser =message.mentions.users.first();
        const responses=[
            "cool blasty https://tenor.com/view/deal-with-it-squirtle-pokemon-gif-6166819",
            "creepy fucker https://tenor.com/view/pokemon-excited-happy-squirtle-hihihi-gif-7937582",
            "happy blasty! https://tenor.com/view/squirtle-smile-happy-pokemon-gif-17472918",
            "angwy fucker https://tenor.com/view/pokemon-squirtle-clone-fight-fighting-gif-7863630",
            "cute blasty https://tenor.com/view/woaaaa-gif-10841239"
]
        message.reply(responses[Math.floor(Math.random() * responses.length)]);
	},
};