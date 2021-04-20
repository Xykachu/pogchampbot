const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const DisTube = require('distube')
const distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
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

	// Queue status template
	const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

	distube
	/*
		.on("playSong", (message, queue, song) => message.channel.send(
			`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user.tag}\n${status(queue)}`
		))
		.on("addSong", (message, queue, song) => message.channel.send(
			`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user.tag}`
		))
		.on("playList", (message, queue, playlist, song) => message.channel.send(
			`Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user.tag}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
		))
		.on("addList", (message, queue, playlist) => message.channel.send(
			`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
		))
		// DisTubeOptions.searchSongs = true
		.on("searchResult", (message, result) => {
			let i = 0;
			message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
		})
		// DisTubeOptions.searchSongs = true
		.on("searchCancel", (message) => message.channel.send(`Searching canceled`))
		.on("error", (message, e) => {
			console.error(e)
			message.channel.send("An error encountered: " + e);
		});
*/
	if (com == "play") {
		if (!message.member.voice.channel) return message.channel.send('you are not in a voice channel.');
		if (!args2[0]) return message.channel.send("you need type a song to play");
		distube.play(message, args2.join(" "));
		message.channel.send(`adding your song to the queue `)
		
		return;
	}
	if (com == "stop") {
		const bot = message.guild.members.cache.get(client.user.id);
		if (!message.member.voice.channel) return message.channel.send('you are not in a voice channel.');
		if (bot.voice.channel !== message.member.voice.channel) return message.channel.send("you are not in the same voice channel as the bot");
		distube.stop(message);
		message.channel.send("you have stopped the music");
	}
	if (com == "volume") {
		const volume = parseInt(args2[0])
		const bot = message.guild.members.cache.get(client.user.id);
		if (!message.member.voice.channel) return message.channel.send('you are not in a voice channel.');
		if (bot.voice.channel !== message.member.voice.channel) return message.channel.send("you are not in the same voice channel as the bot");
		distube.setVolume(message,args2);
		message.channel.send(`volume set to ${volume}`);
	}
	

});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

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