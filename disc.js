/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const { Client, RichEmbed } = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content.slice(0,2) === 'a!' && message.content != 'a!help'
  	&& message.content.slice(0,3) != 'a!:') {
    // Send "pong" to the same channel
    //message.channel.send('pong');
    let say = '**'
    for(let i=1; i<= message.content.slice(2).length; i++){
    	 say += message.content.slice(i+1,i+2) + ' ' 
	}
	say += '**'
	say = say.toUpperCase()
	message.channel.send(say)
  }

  if (message.content === 'a!help') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('Commands')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('list of commands available')
      .addField('a!help', "shows this")
      .addField('a!<any text>', "posts meme text")
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
redacted
