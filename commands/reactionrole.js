
const Discord = require('discord.js');
module.exports={
    name: 'reactionrole',
    description: "gives user role based on reaction",
    async execute( message,args,client){
       
        
        const channel = '989505147489107978';
      
        const modsRole = message.guild.roles.cache.find(role => role.name === "I stupid");
        const minecraftRole = message.guild.roles.cache.find(role => role.name === "Minecraft");
        const raftRole = message.guild.roles.cache.find(role => role.name === "raft");
        const pokemonRole = message.guild.roles.cache.find(role => role.name === "PokemonGo");
        const amongusRole = message.guild.roles.cache.find(role => role.name === "Among us");
        const valorantRole = message.guild.roles.cache.find(role => role.name === "valorant");

        const modsEmoji = '⚔️';
        const minecraftEmoji = '⛏️';
        const raftEmoji = '⛵';
        const pokemonGoEmoji = '👲';
        const amongusEmoji = '👹';
        const valorantEmoji = '🎮';

if(message.author.id === '256164532781580289'){
    const embed = new Discord.MessageEmbed()
    .setColor('#e42643')
    .setTitle('Choose all the roles u want')
    .setDescription('Click on a reaction to get a role, unreact to remove it\n\n'
    + `${modsEmoji} for Mods role\n`
    + `${minecraftEmoji} for Minecraft role\n`
    + `${raftEmoji} for Raft role\n`
    + `${pokemonGoEmoji} for Pokemon role\n`
    + `${amongusEmoji} for Among us role\n`
    + `${valorantEmoji} for Valorant role`);

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(modsEmoji);
    messageEmbed.react(minecraftEmoji);
    messageEmbed.react(raftEmoji);
    messageEmbed.react(pokemonGoEmoji);
    messageEmbed.react(amongusEmoji);
    messageEmbed.react(valorantEmoji);
}
else{
    message.channel.send("sorry, you cannot use this command");
}
       

         //works up to here

        


        client.on('messageReactionAdd',async (reaction, user)=> {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot)return;
            if(!reaction.message.guild)return;
            
            if(reaction.message.channel.id === channel){

                
                if(reaction.emoji.name === modsEmoji){
                     reaction.message.guild.members.cache.get(user.id).roles.add(modsRole);
                }
                if(reaction.emoji.name === minecraftEmoji){
                    reaction.message.guild.members.cache.get(user.id).roles.add(minecraftRole);
               }
               if(reaction.emoji.name === raftEmoji){
                reaction.message.guild.members.cache.get(user.id).roles.add(raftRole);
           }
           if(reaction.emoji.name === pokemonGoEmoji){
            reaction.message.guild.members.cache.get(user.id).roles.add(pokemonRole);
       }
       if(reaction.emoji.name === amongusEmoji){
        reaction.message.guild.members.cache.get(user.id).roles.add(amongusRole);
   }
   if(reaction.emoji.name === valorantEmoji){
    reaction.message.guild.members.cache.get(user.id).roles.add(valorantRole);
}
 
                else{
                   
                    return;
                }

            }
        });
        
       
        client.on('messageReactionRemove',async(reaction,user)=> {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot)return;
            if(!reaction.message.guild)return;
            
            if(reaction.message.channel.id === channel){

                
                if(reaction.emoji.name === modsEmoji){
                     reaction.message.guild.members.cache.get(user.id).roles.remove(modsRole);
                }
                if(reaction.emoji.name === minecraftEmoji){
                    reaction.message.guild.members.cache.get(user.id).roles.remove(minecraftRole);
               }
               if(reaction.emoji.name === raftEmoji){
                reaction.message.guild.members.cache.get(user.id).roles.remove(raftRole);
           }
           if(reaction.emoji.name === pokemonGoEmoji){
            reaction.message.guild.members.cache.get(user.id).roles.remove(pokemonRole);
       }
       if(reaction.emoji.name === amongusEmoji){
        reaction.message.guild.members.cache.get(user.id).roles.remove(amongusRole);
   }
   if(reaction.emoji.name === valorantEmoji){
    reaction.message.guild.members.cache.get(user.id).roles.remove(valorantRole);
}
                else{
                    return;
                }

            }
        });
        
       
    }
    
}