const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token ,why_dad_left} = require('./config.json');
//const client = new Discord.Client();
const { S_IFDIR } = require('constants');
//const token1 = process.env.token

const client = new Discord.Client({ intents:["GUILDS","GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_MESSAGE_REACTIONS"]},{partials:["USER","REACTION","MESSAGE","CHANNEL","GUILD_MEMBER"]});
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//reads files in command folder
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);	
}

//when bot is started it logs stuff / changes bot status of needed online/busy/idle

client.once('ready', () => {
	console.log(`${client.user.tag} has logged in`);

});



//array from commands collection by keys only
const allCommands = Array.from(client.commands.keys());

// when message is sent with > prefix
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return; //if bot or doesnt start with prefix - dont do anything give up on life

	const args = message.content.slice(prefix.length).trim().split(/ +/); //splits userinput and removes prefix
	const commandName = args.shift().toLowerCase(); //gets comand name

var output = " "; //updates after going through each file below

let embed = new Discord.MessageEmbed() //default embed to update in the foreach below.
.setColor('#eca6ff')
.setTitle('Available Commands:')
.setDescription(`(Use > before commands)`)
.addField(`uwu`);

	if(commandName === "commands"){ // if the command is commands do this;

		allCommands.forEach(element => { //for each command update output and then embed.
			output += "**[" + element + "]**" + " ";
			embed = new Discord.MessageEmbed()
        .setColor('#eca6ff')
        .setTitle('List of Commands')
        .setDescription(`Make sure to use > before all the commands!!! :D`)
        .addField(output,"***"); // can't be blank
		
		});
		message.reply(embed);  //send embed and tag user.
	}
	//if command isnt commands -> use command handler.
	
	if (!client.commands.has(commandName)) {
		
		return; //if command doesnt exist. return
	}

	const command = client.commands.get(commandName); 

	try {
		command.execute(message, args,client); //try to execute
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!'); //sends reply and tags user. // message.send to not tag.
	}
});

//add roles on join
client.on('guildMemberAdd',guildMember =>{

	var server = client.guilds.cache.get(guildMember.guild.id).id;
	//roles
	let followersRole = guildMember.guild.roles.cache.find(role => role.name === 'Followers');
	let valorantRole = guildMember.guild.roles.cache.find(role => role.name === 'valorant');
	let modsRole = guildMember.guild.roles.cache.find(role => role.name === 'Mods');
	let vipRole = guildMember.guild.roles.cache.find(role => role.name === 'Twitch VIP');
	let pogoRole = guildMember.guild.roles.cache.find(role => role.name === 'PokemonGo');
	let raftRole = guildMember.guild.roles.cache.find(role => role.name === 'raft');
	let squirtleRole = guildMember.guild.roles.cache.find(role => role.name === 'Squirtle');
	
	//guildMember.roles.add(followersRole);
	if(server === "453370791141310476" ){
		if (guildMember.id === "282540848250355712"){
			guildMember.roles.add(valorantRole);
			guildMember.roles.add(modsRole);
			guildMember.roles.add(vipRole);
			guildMember.roles.add(pogoRole);
			guildMember.roles.add(followersRole);
			guildMember.roles.add(raftRole);
			guildMember.roles.add(squirtleRole);
			console.log("blasty")
		}
		else {
			guildMember.roles.add(followersRole);
			console.log("not him")
			
		}
	}
	else {
		guildMember.roles.add(followersRole);
		console.log("not the server?")
		
	}
		
});

client.login(process.env.token);
