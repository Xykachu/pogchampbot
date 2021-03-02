//#region const
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const Discord= require('discord.js');
const { CLIENT_RENEG_LIMIT } = require('tls');
const client = new Discord.Client();
const token ="ODE1OTcxNTA4NzM5NjM3MjU4.YD0Krw.KZBVMuRb1yAnRubNDDhgH6Z0NhM"; //login token 
const prefix =">"; // prefix

//#endregion

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`); //logs bots tag to console
   client.user.setActivity('need an adult', { type: 'PLAYING' }); //sets bots discord status
   //client.user.setStatus("idle");
 });
//login token
client.login(token);


//Im a dumbass and should have made the commands in sepereate files but i guess i cant help a small brain


//----------------------------------------------------------------------------------------------------------------------------
//pogchamp command - >pogchamp -> number 1-6 
client.on('message', async (msg)=>{
    const det = "```1 very pogchamp ,2 kinda pogchamp ,3 pogish ,4 not very pog ,5 unpogchamp ,6 need pat```";
    if(msg.author.bot)return;
    const filter = (m) => m.author.id === msg.author.id; //checks if users match
    if(msg.content.toLowerCase() === `${prefix}pogchamp`){ //command
        msg.channel.send("how are you today?" + msg.author.username); // response to command
        msg.channel.send(det);
        
        msg.channel.awaitMessages(filter,{max:1, time:10000, errors:['time']}) //waits for message for 10 seconds, only 1 message allowed
        .then((collected)=>{
            const ResponseMsg = collected.first(); // looks at first reply 
            console.log(ResponseMsg.content); //logs content of the message it read
            if(ResponseMsg.content==="1"){
                msg.channel.send('1 - very pogchamp.. Thats good!');
                msg.channel.send('https://tenor.com/view/spongebob-squarepants-dance-happy-dance-%E6%AD%A1%E5%BF%AB-gif-5084836')
            }
            else if(ResponseMsg.content==="2"){
                msg.channel.send('2 - kinda pogchamp.. thats not so good..');
                msg.channel.send("https://tenor.com/view/sad-hangry-grumpy-upset-fake-smile-gif-11970365")
            }
            else if(ResponseMsg.content==="3"){
                msg.channel.send('3 - pogish.. ohno..its getting worse');
                msg.channel.send("https://tenor.com/view/embarrassed-sad-cry-smile-interview-gif-4461765")

            }
            else if(ResponseMsg.content==="4"){
                msg.channel.send('4 - not very pog.. oh fuck go back ');
                msg.channel.send("https://tenor.com/view/icecream-gif-4502495")
            }
            else if(ResponseMsg.content==="5"){
                msg.channel.send('5 - unpogchamp Ooh frick thats very bad ');
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
//----------------------------------------------------------------------------------------------------------------------------
//pat command >pat @mention
client.on('message',async(msg)=>{
    if(msg.author.bot)return;
    const filter = (m) => m.author.id === msg.author.id;
    const taggedUser = msg.mentions.users.first();
    if(msg.content.toLowerCase().startsWith(`${prefix}pat`) ){
        const responses = [
            "https://tenor.com/view/funny-dog-cat-patting-head-gif-4953911", 
            "https://tenor.com/view/pat-good-boy-gif-7220650", 
            "https://tenor.com/view/ao-haru-ride-anime-boy-anime-girl-anime-couple-couple-gif-13576017",
            "https://tenor.com/view/cat-duck-pat-head-cute-gif-17539471",
            "https://tenor.com/view/mala-mishra-jha-pat-head-cute-sparkle-penguin-gif-16770818",
            "https://tenor.com/view/bunny-cute-head-pat-pet-kitty-gif-15162393"
        ];

            msg.reply(`pats ${taggedUser.username} ..`)
            msg.channel.send(responses[Math.floor(Math.random() * responses.length)]); //random gif response
    }
    
});
//----------------------------------------------------------------------------------------------------------------------------
//commands >help
client.on('message',async(msg)=>{
    const com = "```Pat | Pogchamp | ree | kyle | slap | pun | rps | blasty | pog | image```";
    if(msg.author.bot)return;
    const filter = (m) => m.author.id === msg.author.id;
    if(msg.content.toLowerCase() === `${prefix}help`){
        
            msg.channel.send(com);
    }
    
});
//----------------------------------------------------------------------------------------------------------------------------
//triggers on ree - no prefix
client.on('message',async(msg)=>{
    const responses = ["https://tenor.com/view/reee-kid-tantrums-gif-15375793",
"https://tenor.com/view/ree-reee-reeee-reeeee-scree-gif-12568403",
"https://tenor.com/view/reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee-gif-15656567",
"https://tenor.com/view/ree-pepe-triggered-angry-ahhhh-gif-13627544"];
    if(msg.author.bot)return;
    const filter = (m) => m.author.id === msg.author.id;
    if(msg.content.toLowerCase() === `ree`){
        
            msg.channel.send("REE! " +msg.author.username);
            msg.channel.send(responses[Math.floor(Math.random() * responses.length)]);
    }
    
});
//----------------------------------------------------------------------------------------------------------------------------
//deletes message after 5 seconds (random test command)
client.on('message', async msg => {
	if (msg.content.toLowerCase() === `${prefix}kyle`) {
		try {
			const sentMessage = await msg.channel.send('fuck you kyle');
			await sentMessage.delete({ timeout: 5000 });
		} catch (error) {
			// handle error
		}
	}
});

//slap command >slap @mention
client.on('message', async msg => {
    const taggedUser = msg.mentions.users.first();
    const responses = [
        "https://tenor.com/view/baka-slap-huh-angry-gif-15696850", 
        "https://tenor.com/view/pikachu-slap-fight-mad-no-gif-16415016", 
        "https://tenor.com/view/cat-punch-stuffed-toy-gif-16184358",
        "https://tenor.com/view/family-guy-brian-griffin-stewie-griffin-slap-push-gif-4590339",
        "https://tenor.com/view/slap-gif-19326818",
        "https://tenor.com/view/slap-handa-seishuu-naru-kotoishi-barakamon-anime-barakamon-gif-5509136"
    ];
	if (msg.content.toLowerCase().startsWith(`${prefix}slap`) ) {
		
msg.reply(`slaps ${taggedUser.username} ..`)
msg.channel.send(responses[Math.floor(Math.random() * responses.length)]);
	}
});

//----------------------------------------------------------------------------------------------------------------------------
//pun >pun - gives random pun
client.on('message',async(msg)=>{
    if(msg.author.bot)return;
    const filter = (m) => m.author.id === msg.author.id;
    const taggedUser = msg.mentions.users.first();
    if(msg.content.toLowerCase().startsWith(`${prefix}pun`) ){
        const responses = [
            "Don't spell part backwards. It's a trap.", 
            "Thanks for explaining the word many to me, it means a lot.", 
            "What did the grape say when it got crushed? Nothing, it just let out a little wine.",
            "I don’t trust stairs because they’re always up to something.",
            "Why was Dumbo sad? He felt irrelephant.",
            "I was wondering why the ball was getting bigger. Then it hit me.",
            "I made a pun about the wind but it blows.",
            "A cross-eyed teacher couldn’t control his pupils.",
            "England doesn’t have a kidney bank, but it does have a Liverpool.",
            "How does Moses make coffee? Hebrews it.",
            "How did the picture end up in jail? It was framed!",
            "What did the sushi say to the bee? Wasabee!",
            "One lung said to another, “we be-lung together!”",
            "What did the buffalo say to his son? Bison.",
            "I hate how funerals are always at 9 a.m. I’m not really a mourning person.",
            "There was a kidnapping at school yesterday. Don’t worry, though – he woke up!",
            "I wasn’t originally going to get a brain transplant, but then I changed my mind.",
            "What do you call the wife of a hippie? A Mississippi.",
            "Never discuss infinity with a mathematician, they can go on about it forever.",
            "Never trust an atom, they make up everything",
            "To the guy who invented zero, thanks for nothing.",
            "I once ate a dictionary, it gave me thesaurus throat I've ever had.",
            "I have a fear of elevators, I'm taking steps to avoid them",
            "I know a lot of jokes about retired people but none of them work.",
            "Sundays are always a little sad but, the day before is a sadder day.",
            "This graveyard looks overcrowded. People must be dying to get in there.",
            "What do you call a Mexican who has lost his car? Carlos",
            "What do you call someone with no body and no nose? Nobody knows"
        ];

            msg.reply(responses[Math.floor(Math.random() * responses.length)]);
    }
    
});

//----------------------------------------------------------------------------------------------------------------------------
//blasty >blasty -> random squirtle gif
client.on('message',async msg=>{
    const taggedUser =msg.mentions.users.first();
    
    if(msg.content.toLowerCase().startsWith(`${prefix}blasty`)){
        const responses=[
            "cool blasty https://tenor.com/view/deal-with-it-squirtle-pokemon-gif-6166819",
            "creepy fucker https://tenor.com/view/pokemon-excited-happy-squirtle-hihihi-gif-7937582",
            "happy blasty! https://tenor.com/view/squirtle-smile-happy-pokemon-gif-17472918",
            "angwy fucker https://tenor.com/view/pokemon-squirtle-clone-fight-fighting-gif-7863630",
            "cute blasty https://tenor.com/view/woaaaa-gif-10841239"
]
        msg.reply(responses[Math.floor(Math.random() * responses.length)]);
    }
});

//----------------------------------------------------------------------------------------------------------------------------
//...the pog to my champ >pog - responds with champ
client.on('message',async msg=>{
    if(msg.content.toLowerCase()===`${prefix}pog`){
        msg.channel.send("champ");
    }
});


//----------------------------------------------------------------------------
//ROCK-PAPER-SCISSORS >rps -> rock,paper,scissors -> rng win/lose

client.on('message', async (msg)=>{
    if(msg.author.bot)return;
    const RAND=["rock","paper","scissors"];
    randomR = RAND[Math.floor(Math.random() * RAND.length)];
    const filter = (m) => m.author.id === msg.author.id; //checks if users match
    if(msg.content.toLowerCase() === `${prefix}rps`){ //command
        msg.reply("rock paper or scissors? "); // response to command
        msg.channel.awaitMessages(filter,{max:1, time:10000, errors:['time']}) //waits for message for 10 seconds, only 1 message allowed
        .then((collected)=>{
            const ResponseMsg = collected.first(); // looks at first reply 
            console.log(ResponseMsg.content); //logs content of the message it read

            if((ResponseMsg.content.toLowerCase() === "rock") &&(randomR.toLowerCase() === "rock") ){
                msg.channel.send(`i choose.. ${randomR} its a draw..`);
                console.log(randomR);
            }
            else if((ResponseMsg.content.toLowerCase() === "rock")  &&(randomR.toLowerCase() === "paper") ){
                msg.channel.send(`i choose..${randomR} you lose..`);
                console.log(randomR);
            }
            else if((ResponseMsg.content.toLowerCase() === "rock")  &&(randomR.toLowerCase() === "scissors") ){
                msg.channel.send(`i choose..${randomR} you win!`);
                console.log(randomR);
            }
            else if((ResponseMsg.content.toLowerCase() === "paper") &&(randomR.toLowerCase() === "paper")){
                msg.channel.send(`i choose..${randomR} its a draw..`);
                console.log(randomR);
            }
            else if((ResponseMsg.content.toLowerCase() === "paper") &&(randomR.toLowerCase() === "rock") ){
                msg.channel.send(`i choose..${randomR} you win!`);
                console.log(randomR);
            }
            else if((ResponseMsg.content.toLowerCase() === "paper")  &&(randomR.toLowerCase() === "scissors") ){
                msg.channel.send(`i choose..${randomR} you lose..`);
                console.log(randomR);
            }
            else if((ResponseMsg.content.toLowerCase() === "scissors")  &&(randomR.toLowerCase() === "scissors") ){
                msg.channel.send(`i choose..${randomR} its a draw..`);
                console.log(randomR);
            }
            else if((ResponseMsg.content.toLowerCase() === "scissors")  &&(randomR.toLowerCase() === "paper") ){
                msg.channel.send(`i choose..${randomR} you win!`);
                console.log(randomR);
            }
            else if((ResponseMsg.content.toLowerCase() === "scissors")  &&(randomR.toLowerCase() === "rock") ){
                msg.channel.send(`i choose..${randomR} you lose..`);
                console.log(randomR);
            }
            else {
                msg.channel.send("that wasnt an option, idiot");
                console.log(randomR);
            }
  
        })
        .catch((err)=>console.log(err)
        );   
    }
    
});
//----------------------------------------------------------------------------------------------------------------------------

//twitch - > displays name, and link 
client.on('message',async msg=>{
    if(msg.author.bot)return;

    const filter = (m) => m.author.id === msg.author.id;

    if(msg.content.toLowerCase()===`${prefix}twitch`){

        msg.reply("whos profile do you want to see?");
        msg.channel.awaitMessages(filter,{max:1, time:10000, errors:['time']})
        .then((collected)=>
        {
            ResponseMsg = collected.first();
            console.log(ResponseMsg);
        
        const yessi="YESSI";
            if(ResponseMsg.content.toLowerCase() === yessi.toLowerCase() ) //if yessi add saur
            {
                const embed = new Discord.MessageEmbed()
                .setColor('#800080')
                .setTitle('Twitch user:')
                .setDescription(ResponseMsg)
                .addField("twitch:",`https://twitch.tv/${ResponseMsg.content.toLowerCase()+"saur"}`)
                msg.channel.send(embed);
            }
            
            else //twitch + word
            {
                // msg.channel.send(msg.author.avatarURL());
                const embed = new Discord.MessageEmbed()
                 .setColor('#800080')
                 .setTitle('Pogchamp user:')
                 .setDescription(ResponseMsg)
                 .addField("twitch:",`https://twitch.tv/${ResponseMsg}`)
                 msg.channel.send(embed);
             }
        })
        .catch(function(){ // if no answered, send default
            
            const embed = new Discord.MessageEmbed()
             .setColor('#800080')
             .setTitle('Pogchamp user:')
             .setDescription(msg.author.username)
             .addField("twitch:",`https://twitch.tv/${msg.author.username}`)
             .setImage(msg.author.avatarURL())
             msg.channel.send(embed);
        }
        );
    }
        
});

//----------------------------------------------------------------------------------------------------------------------------
//profile -> displays name, twitch link and discord avatar
client.on('message',async msg=>{
    
    if(msg.content.toLowerCase()===`${prefix}profile`){
        if(msg.author.username === "Yessi" ){
            const embed = new Discord.MessageEmbed()
            .setColor('#f0f0f0')
            .setTitle('Pogchamp user:')
            .setDescription(msg.author.username)
            .addField("twitch:",`https://twitch.tv/${msg.author.username+"saur"}`)
            .setImage(msg.author.avatarURL())
            msg.channel.send(embed);
        }
        else{

        
            // msg.channel.send(msg.author.avatarURL());
            const embed = new Discord.MessageEmbed()
             .setColor('#f0f0f0')
             .setTitle('Pogchamp user:')
             .setDescription(msg.author.username)
             .addField("twitch:",`https://twitch.tv/${msg.author.username}`)
             .setImage(msg.author.avatarURL())
             msg.channel.send(embed);
         }
        }
        
});

