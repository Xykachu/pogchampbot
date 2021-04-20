
const Discord = require('discord.js');
module.exports = {
	name: 'pun',
	description: 'very funny yes',
	execute(message, args) {
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
            "What do you call someone with no body and no nose? Nobody knows",
            "What did one eye say to the other? Just between you and me, something smells.",
            "I can’t stand Russian dolls. They’re so full of themselves.",
            "What do you call a snail that isn’t moving? An escar-stay."

        ];

            message.reply(responses[Math.floor(Math.random() * responses.length)]);
	},
};