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
    console.log("test");
    
    if(message.content.startsWith(prefix + "giverole ")){
      
        try{

            const role = message.guild.roles.cache.find(role => role.name === roleSelected);
       
            if(message.member.roles.cache.some(role => role.name === roleSelected)) {

                message.reply(`You've already got the role bud.`);

            }

            else{

            message.reply("Added the role!");
            
            let member = message.guild.member(message.author);
            message.guild.member(message.author).roles.add(role);

            }

            }

        catch(err){

            message.reply("I fucking broke dude. This either is not a role, your spelling is off or you're just retarded.");
            console.log(err);

        }
    }

});

client.login('token');
