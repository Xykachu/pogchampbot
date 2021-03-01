const Discord= require('discord.js');
const client = new Discord.Client();
const token ="ODE1OTcxNTA4NzM5NjM3MjU4.YD0Krw.KZBVMuRb1yAnRubNDDhgH6Z0NhM";
const prefix ="!"

client.on('ready', ()=>{
    console.log(`logged in as ${client.user.tag}!`);
});


//pogchamp command
client.on('message', async (msg)=>{
    if(msg.author.bot)return;
    const filter = (m) => m.author.id === msg.author.id; //checks if users match
    if(msg.content.toLowerCase() === `${prefix}pogchamp`){ //command
        msg.channel.send('how are you today? ' + msg.author.username); // response to command
        msg.channel.send('1 very pogchamp ,2 kinda pogchamp ,3 pogish ,4 not very pog ,5 unpogchamp ,6 need pat');
        
        msg.channel.awaitMessages(filter,{max:1, time:10000, errors:['time']}) //waits for message for 10 seconds, only 1 message allowed
        .then((collected)=>{
            const ResponseMsg = collected.first(); // looks at first reply 
            console.log(ResponseMsg.content); //logs content of the message it read
            if(ResponseMsg.content==="1"){
                msg.channel.send('1 - very pogchamp.. good.. im happy to hear that friend');
            }
            else if(ResponseMsg.content==="2"){
                msg.channel.send('2 - kinda pogchamp.. #fine.. this is an acceptable answer, wish u were better tho D:');
            }
            else if(ResponseMsg.content==="3"){
                msg.channel.send('3 - pogish.. ohno..is something bothering you friend?');
            }
            else if(ResponseMsg.content==="4"){
                msg.channel.send('4 - not very pog.. not good..whats wrong buddy? :c');
            }
            else if(ResponseMsg.content==="5"){
                msg.channel.send('5 - unpogchamp im sorry fren :c hope ur okay! ');
                msg.channel.send("https://tenor.com/view/big-hero6-baymax-feel-better-hug-hugging-gif-4782499")
            }
            else if(ResponseMsg.content==="6"){
                const responses = ["https://tenor.com/view/funny-dog-cat-patting-head-gif-4953911", 
            "https://tenor.com/view/pat-good-boy-gif-7220650", 
            "https://tenor.com/view/ao-haru-ride-anime-boy-anime-girl-anime-couple-couple-gif-13576017",
            "https://tenor.com/view/cat-duck-pat-head-cute-gif-17539471"];
                msg.channel.send('6 - need a pat...');
                msg.channel.send(responses[Math.floor(Math.random() * responses.length)]); //random
            }
            else {
                msg.channel.send("that wasnt an option.. *panic*")
                msg.channel.send("https://tenor.com/view/spongebob-panicking-panic-run-stressed-gif-5303378");
            }
            
        })
        .catch((err)=>console.log(err)
        );   
    }
    
});

//pat command
client.on('message',async(msg)=>{
    if(msg.author.bot)return;
    const filter = (m) => m.author.id === msg.author.id;
    if(msg.content.toLowerCase() === `${prefix}pat`){
        const responses = [
            "https://tenor.com/view/funny-dog-cat-patting-head-gif-4953911", 
            "https://tenor.com/view/pat-good-boy-gif-7220650", 
            "https://tenor.com/view/ao-haru-ride-anime-boy-anime-girl-anime-couple-couple-gif-13576017",
            "https://tenor.com/view/cat-duck-pat-head-cute-gif-17539471",
            "https://tenor.com/view/mala-mishra-jha-pat-head-cute-sparkle-penguin-gif-16770818",
            "https://tenor.com/view/bunny-cute-head-pat-pet-kitty-gif-15162393"
        ];
            msg.channel.send(responses[Math.floor(Math.random() * responses.length)]); //random gif response
    }
    
});
client.on('message',async(msg)=>{
    if(msg.author.bot)return;
    const filter = (m) => m.author.id === msg.author.id;
    if(msg.content.toLowerCase() === `${prefix}commands`){
        
            msg.channel.send("Available commands are : Pat, Pogchamp");
    }
    
});

//triggers on ree
client.on('message',async(msg)=>{
    if(msg.author.bot)return;
    const filter = (m) => m.author.id === msg.author.id;
    if(msg.content.toLowerCase() === `ree`){
        
            msg.channel.send("REE! " +msg.author.username);
            msg.channel.send("https://tenor.com/view/ree-pepe-triggered-angry-ahhhh-gif-13627544");
    }
    
});

//deletes message after 5 seconds
client.on('message', async message => {
	if (message.content === `${prefix}kyle`) {
		try {
			const sentMessage = await message.channel.send('fuck you kyle');
			await sentMessage.delete({ timeout: 5000 });
		} catch (error) {
			// handle error
		}
	}
});

//slap comman
client.on('message', async msg => {
    const taggedUser = msg.mentions.users.first();
	if (msg.content.startsWith(`${prefix}slap`) ) {
		
msg.reply(`slaps ${taggedUser.username} ..`)
	msg.channel.send(`https://tenor.com/view/pikachu-slap-fight-mad-no-gif-16415016 `);
	}
});

//login token
client.login(token);
