const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
//const DisTube = require('distube');
const { S_IFDIR } = require('constants');
//const distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
	
}

client.once('ready', () => {
	console.log(`${client.user.tag} has logged in`);
});

//music
client.on("message", async(message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	const args2 = message.content.slice(prefix.length).trim().split(/ +/);
	const com = args2.shift().toLowerCase();

});
const allCommands = Array.from(client.commands.keys());

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

var output = " ";
let embed = new Discord.MessageEmbed()
.setColor('#eca6ff')
.setTitle('Available Commands:')
.setDescription(`(Use > before commands)`)
.addField(`uwu`);
	if(commandName === "commands"){
		//message.reply(`The list of commands is:` + allCommands );

		allCommands.forEach(element => {
			output += "**[" + element + "]**" + " ";
			embed = new Discord.MessageEmbed()
        .setColor('#eca6ff')
        .setTitle('List of Commands')
        .setDescription(`Make sure to use > before all the commands!!! :D`)
        .addField(output,"uwu!");
		
		});
		message.reply(embed); 
	}
	
	if (!client.commands.has(commandName)) {
		
		return;
	}

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);