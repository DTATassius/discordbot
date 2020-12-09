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
 
    if(message.content.toLowerCase().includes("bot" || "bots") && message.content.toLowerCase().includes("broken")){
     message.reply("I am _really_ broken though?");
     console.log("someone dissed my bot");
    }
    else if(message.content.toLowerCase().includes("bot" || "bots") && message.content.toLowerCase().includes("stupid")){
     message.reply("I'm not _that_ stupid you know.");
     console.log("The bot is actually stupid though");
    }
    
    if(message.content.startsWith(prefix + "giverole ")){
      
        try{

            const role = message.guild.roles.cache.find(role => role.name === roleSelected);
       
            if(message.member.roles.cache.some(role => role.name === roleSelected)) {

                message.reply(`You've already got the role bud.`);
                console.log("User already had the role: " + roleSelected);

            }

            else{

            
            let member = message.guild.member(message.author);
            message.guild.member(message.author).roles.add(role);
            message.reply("Added the role!");
            console.log("Added the role: " + roleSelected + " to User");

            }

            }

        catch(err){

            message.reply("This either is not a role, or your spelling is off.");
            message.reply("Try sending it again.");
            message.reply("If I'm actually broken, message me on discord.");
            console.log(err);

        }
        message.reply("2bot work2");
        message.reply(message.member.guild.roles.cache.get(role => role.name === roleSelected));
        message.reply("2bot still work2");
    }

});

client.login(token.token);
