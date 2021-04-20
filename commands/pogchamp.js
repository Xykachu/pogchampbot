const Discord = require('discord.js');
module.exports = {
	name: 'pogchamp',
	description: 'how are you? ',
	execute(message, args) {
        const filter = (m) => m.author.id === message.author.id; //checks if users match
        //posts first message with options.
        const embedHowAreYou = new Discord.MessageEmbed()
            .setColor('#7193FF')
            .setTitle('How are you today? '+message.author.username)
            .setDescription(`1-6`)
            .addField("[1] Very Pogchamp","Good!")
            .addField("[2] Kinda pogchamp","Fine")
            .addField("[3] Pogish","Okay")
            .addField("[4] Not very pog","Not good")
            .addField("[5] Unpogchamp","Bad")
            .addField("[6] Need pat","Pat me fren")
            message.channel.send(embedHowAreYou)

            message.channel.awaitMessages(filter,{max:1, time:10000, errors:['time']}) //waits for message for 10 seconds, only 1 message allowed
        .then((collected)=>{ 
           
            const Responsemessage = collected.first(); // looks at first reply 
            console.log(Responsemessage.content); //logs content of the message it read


            //switch to find which response was given.
            switch(Responsemessage.content){
                case "1":{
                    const embed = new Discord.MessageEmbed()
                    .setColor('#63ff00')
                    .setTitle('1 - very pogchamp.. Thats good!')
                    .setImage(url="https://media4.giphy.com/media/nDSlfqf0gn5g4/giphy.gif")
                    message.channel.send(embed);
                         break;
                }
                case "2":{
                    const embed = new Discord.MessageEmbed()
                    .setColor('#99c129')
                    .setTitle('2 - kinda pogchamp.. thats still kinda good..')
                    .setImage(url="https://i.gifer.com/HTBx.gif")
                    message.channel.send(embed);
                    break;
                }
                case "3":{
                    const embed = new Discord.MessageEmbed()
                    .setColor('#ffff00')
                    .setTitle('3 - pogish.. ohno..its getting worse')
                    .setImage(url="https://media4.giphy.com/media/6Q3M4BIK0lX44/giphy.gif")
                    message.channel.send(embed);
                    break;
                }
                case "4":{
                    const embed = new Discord.MessageEmbed()
                    .setColor('#FFA500')
                    .setTitle('4 - not very pog.. oh fuck go back ')
                    .setImage(url="https://media3.giphy.com/media/fxZeSkds6bcWGlgevx/giphy.gif")
                    message.channel.send(embed);
                    break;
                }
                case "5":{
                    const embed = new Discord.MessageEmbed()
                .setColor('#d0340d')
                .setTitle('5 - unpogchamp Ooh frick thats very bad ')
                .setImage(url="https://media4.giphy.com/media/Lb3vIJjaSIQWA/source.gif")
                message.channel.send(embed);
                    break;
                }
                case "6":{
                     
                const responses = ["https://media.tenor.com/images/5b3c8ea690356c8566cebcae8fa13b9c/tenor.gif", 
                "https://media1.tenor.com/images/153e9bdd80008e8c0f94110450fcbf98/tenor.gif?itemid=10534102", 
                "https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif",
                "https://media.tenor.com/images/86fee4add43f1910ee89a7f1c75e5679/tenor.gif"];
                const embed = new Discord.MessageEmbed()
                    .setColor('#c12929')
                    .setTitle('6 - need a pat...')
                    .setImage(url=`${responses[Math.floor(Math.random() * responses.length)]}`)
                    message.channel.send(embed);
                    break;
                }
                default:{
                    const embed = new Discord.MessageEmbed()
                    .setColor('#d0340d')
                    .setTitle('that wasnt an option... *panic*')
                    .setImage(url="https://media1.giphy.com/media/l2Jek280UzMXLDfAQ/giphy.gif")
                    message.channel.send(embed);
                }
                
            }
            
        })
        .catch((err)=>console.log(err)
        );   
        
    
	},
};