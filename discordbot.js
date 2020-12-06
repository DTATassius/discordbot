const token = require("./settings.json");
const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "$"

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on("message", message =>{

    var guild = message.guild;
    var roleSelected = message.content.slice(10,message.content.length);
    console.log('Recieved and read the following message: ');
    console.log(message.content);
 
    if(message.content.toLowerCase() === "stupid bot"){
     message.reply("You're stupid, lol.");
    }
    else if (message.content.toLowerCase() === "the bots broken"){
     message.reply("I'm not broken.");
    }
    else if (message.content.toLowerCase() === "the bot's broken"){
     message.reply("I'm not broken.");
    }
    else if (message.content.toLowerCase() === "the bot is broken"){
     message.reply("I'm not broken.");
    }
    else if (message.content.toLowerCase() === "bots broken"){
     message.reply("I'm not broken.");
    }
    else if (message.content.toLowerCase() === "bot broken"){
     message.reply("I'm not broken.");
    }
    else if (message.content.toLowerCase() === "bot is broken"){
     message.reply("I'm not broken.");
    }
    if(message.content.startsWith(prefix + "giverole ")){
      
        try{

            const role = message.guild.roles.cache.find(role => role.name === roleSelected);
       
            if(message.member.roles.cache.some(role => role.name === roleSelected)) {

                message.reply(`You've already got the role bud.`);
                console.log("User already had the role: " + roleSelected);

            }
         
            else if(message.member.roles.cache.some(role => role.name !== roleSelected)){
                    message.reply("This isn't a role, dumbass.");
            }

            else{

            message.reply("Added the role!");
            
            let member = message.guild.member(message.author);
            message.guild.member(message.author).roles.add(role);
            console.log("Added the role: " + roleSelected + " to User");

            }

            }

        catch(err){

            message.reply("This either is not a role, or your spelling is off.");
            message.reply("Try sending it again.");
            message.reply("If I'm actually broken, message me on discord.");
            console.log(err);

        }
    }

});

client.login(token.token);
