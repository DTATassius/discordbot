const token = require("./settings.json");
const Discord = require('discord.js');
const client = new Discord.Client(); /* Adding files */

var prefix = "$" /* Prefix for the bot */

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on("message", message =>{

    var guild = message.guild;
    var roleSelected = message.content.slice(10,message.content.length); 
    console.log('Recieved and read the following message: ');
    console.log(message.content); /* Cuts and logs the message that was written */
    writeFile("Sever_Logs.txt", message.content, console.log("Failed to write text")); /* Test code for logging messages sent to guilds */
 
    if(message.content.toLowerCase().includes("bot" || "bots") && message.content.toLowerCase().includes("broken")){
     message.reply("I am _not_ broken");
     console.log("someone dissed my bot");
    }
    else if(message.content.toLowerCase().includes("bot" || "bots") && message.content.toLowerCase().includes("stupid")){
     message.reply("I'm not _that_ stupid you know.");
     console.log("The bot is actually stupid though"); /* Funny jokes when someone disses my bot */
    }
    
    if(message.content.startsWith(prefix + "giverole ")){ /* Giverole function produced by calling $giverole action */
      
        try{

            const role = message.guild.roles.cache.find(role => role.name === roleSelected); /* Looks for the role that was requested */
       
            if(message.member.roles.cache.some(role => role.name === roleSelected)) {

                message.reply(`You've already got the role bud.`);
                console.log("User already had the role: " + roleSelected); /* User already has the role */

            }

            else{

            
            let member = message.guild.member(message.author);
            message.guild.member(message.author).roles.add(role);
            message.reply("Added the role!");
            console.log("Added the role: " + roleSelected + " to User"); /* Adds the role to the user */

            }

            }

        catch(err){

            message.reply("This either is not a role, or your spelling is off.");
            message.reply("Try sending it again.");
            message.reply("If I'm actually broken, message me on discord."); /* Someone didn't fix the bot and the person messed up in typing the role */
            console.log(err);

        }
        if(message.guild.roles.cache.get(role => role.name !== roleSelected) !== undefined){
         message.reply("It is not undefined");
        }
        else if (message.guild.roles.cache.get(role => role.name === roleSelected) === undefined){
         message.reply("It is undefined");
        }
        else{
          message.reply("It is neither defined or undefined"); /* ***BOT IS STILL IN PROGRESS*** */
        }
    }

});

client.login(token.token); /* Logs the bot into Discord */

























/* Help me */
