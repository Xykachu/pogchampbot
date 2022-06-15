const Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');
const client = new Discord.Client();
const disbut = require('discord-buttons');
disbut(client);
module.exports = {
    name: 'support',
    description: 'support command',
    execute(message, args) {


        let button = new disbut.MessageButton()
            .setLabel("Support")
            .setStyle("url")
            .setURL("https://twitch.tv/Aniuly/")
        message.channel.send('Click here to support', button)

    
        
       
    },
};