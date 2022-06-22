
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports={
    name: 'reactionrole',
    description: "gives user role based on reaction",
    async execute( message,args){
       
        
        const channel = '989084452779069523';
        const testRole = message.guild.roles.cache.find(role => role.name === "Test");
        const followersRole = message.guild.roles.cache.find(role => role.name === "Followers");

        const testEmoji = '😄';
        const followersEmoji = '🍆';

        const embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Choose a role u want')
        .setDescription('Click on a reaction to get a role, unreact to remove it\n\n'
        + `${testEmoji} for test role\n`
        + `${followersEmoji} for followers role`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(testEmoji);
        messageEmbed.react(followersEmoji); //works up to here

        

/*
        client.on('messageReactionAdd',(reaction, user)=> {
            
            if(reaction.message.channel.id === channel){
                
                if(reaction.emoji.name === testEmoji){
                     reaction.message.guild.members.cache.get(user.id).roles.add(testRole);
                }
                if(reaction.emoji.name === followersEmoji){
                      reaction.message.guild.members.cache.get(user.id).roles.add(followersRole);
                }
                else{
                   
                    return;
                }

            }
        });
        */
        //remove
        /*
        client.on('messageReactionRemove',async(reaction,user)=> {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot)return;
            if(!reaction.message.guild)return;
            if(reaction.message.channel.id === channel){
                if(reaction.emoji.name === testEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(testRole);
                }
                if(reaction.emoji.name === followersEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(followersRole);
                }
                else{
                    return;
                }

            }
        });
        */
       
    }
    
}