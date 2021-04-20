const Discord = require('discord.js');
        module.exports = {
        name: 'rps',
        description: 'rock paper scissors',
        execute(message, args) {

    const RAND=["rock","paper","scissors"];
    randomR = RAND[Math.floor(Math.random() * RAND.length)];
    const filter = (m) => m.author.id === message.author.id; //checks if users match

    var embed = new Discord.MessageEmbed()
    .setColor('#800080')
    .setTitle('Your choices:')
    .setDescription("rock, paper, scissors")
    message.reply(embed); // response to command
    message.channel.awaitMessages(filter,{max:1, time:10000, errors:['time']}) //waits for message for 10 seconds, only 1 message allowed
    .then((collected)=>{
        const Responsemessage = collected.first(); // looks at first reply 
        console.log(Responsemessage.content); //logs content of the message it read

        //draw
        if((Responsemessage.content.toLowerCase() === "rock") &&(randomR.toLowerCase() === "rock") ){
            const embed = new Discord.MessageEmbed()
        .setColor('#ffff00')
        .setTitle('You chose:')
        .setDescription(Responsemessage.content)
        .addField("my choice:",`${randomR} ..its a draw`)
        message.channel.send(embed);
        }

        //lose
        else if((Responsemessage.content.toLowerCase() === "rock")  &&(randomR.toLowerCase() === "paper") ){
            const embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('You chose:')
        .setDescription(Responsemessage.content)
        .addField("my choice:",`${randomR} ..you lose`)
        message.channel.send(embed);
        }

        //win
        else if((Responsemessage.content.toLowerCase() === "rock")  &&(randomR.toLowerCase() === "scissors") ){
            const embed = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setTitle('You chose:')
            .setDescription(Responsemessage.content)
            .addField("my choice:",`${randomR} ..you win`)
            message.channel.send(embed);
        }

        //draw
        else if((Responsemessage.content.toLowerCase() === "paper") &&(randomR.toLowerCase() === "paper")){
            const embed = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setTitle('You chose:')
            .setDescription(Responsemessage.content)
            .addField("my choice:",`${randomR} ..its a draw`)
            message.channel.send(embed);
        }

        //win
        else if((Responsemessage.content.toLowerCase() === "paper") &&(randomR.toLowerCase() === "rock") ){
            const embed = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setTitle('You chose:')
            .setDescription(Responsemessage.content)
            .addField("my choice:",`${randomR} ..you win`)
            message.channel.send(embed);
        }

        //lose
        else if((Responsemessage.content.toLowerCase() === "paper")  &&(randomR.toLowerCase() === "scissors") ){
            const embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('You chose:')
        .setDescription(Responsemessage.content)
        .addField("my choice:",`${randomR} ..you lose`)
        message.channel.send(embed);
        }

        //draw
        else if((Responsemessage.content.toLowerCase() === "scissors")  &&(randomR.toLowerCase() === "scissors") ){
            const embed = new Discord.MessageEmbed()
            .setColor('#ffff00')
            .setTitle('You chose:')
            .setDescription(Responsemessage.content)
            .addField("my choice:",`${randomR} ..its a draw`)
            message.channel.send(embed);
        }
        
        //win
        else if((Responsemessage.content.toLowerCase() === "scissors")  &&(randomR.toLowerCase() === "paper") ){
            const embed = new Discord.MessageEmbed()
            .setColor('#00ff00')
            .setTitle('You chose:')
            .setDescription(Responsemessage.content)
            .addField("my choice:",`${randomR} ..you win`)
            message.channel.send(embed);
        }

        //lose
        else if((Responsemessage.content.toLowerCase() === "scissors")  &&(randomR.toLowerCase() === "rock") ){
            const embed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('You chose:')
        .setDescription(Responsemessage.content)
        .addField("my choice:",`${randomR} ..you lose`)
        message.channel.send(embed);
        }

        //idiot
        else {
            const embed = new Discord.MessageEmbed()
            .setColor('#0000ff')
            .setTitle('You chose:')
            .setDescription(Responsemessage.content)
            .addField("you think youre funny?",`fuck you ${message.author}`)
            message.channel.send(embed);
        }

    })
    .catch((err)=>console.log(err)
    );  
    return; 
    
    
        },
    };