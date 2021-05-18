const token = require("./settings.json");
const Discord = require('discord.js');
const fs = require("fs");
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
    var data = message.content;
    var msgUser = message.author;
 
    fs.appendFile("Server_Log.txt", msgUser + ": " + data + "\n", (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:", data);
  }
}); /* Test code for logging messages sent to guilds */
 
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
            console.log("Bot couldn't assign role.")

        }
    } /* End of if statement */
 
    var roleSelected = message.content.slice(12,message.content.length); 
     if(message.content.startsWith(prefix + "removerole")){
      
     
         try{

            const role = message.guild.roles.cache.find(role => role.name === roleSelected); /* Looks for the role that was requested */
            
          
            if(!message.member.roles.cache.some(role => role.name === roleSelected)) {
             
             

                message.reply(`You don't have the role bud.`);
                console.log("User doesn't have the role: " + roleSelected); /* User doesn't have the role */

            }

            else{
             
             
             

            
            message.guild.member(message.author).roles.remove(role);
            message.reply("Removed the role!");
            console.log("Removed the role: " + roleSelected + " from User"); /* Removes the role from the user */

            }

            }

        catch(err){
         
         

            message.reply("This either is not a role, or your spelling is off.");
            message.reply("Try sending it again.");
            message.reply("If I'm actually broken, message me on discord."); /* Someone didn't fix the bot and the person messed up in typing the role */
            console.log(err);
            console.log("Bot couldn't remove role.");

        }
     
     
     
    } /* End of if statement */
 
 
 try{
  
 if(message.content.startsWith(prefix + "manageaddrole")){ /* Checks for command */
  
 if(message.guild.member(message.author).hasPermission("MANAGE_ROLES")){ /* Checks if user has perms */
   
   var regx = /"( @[a-zA-z]*)( [a-zA-z]*)"/; /* Looks for user selected and for role selected */
  
  var userSelected, roleSelected = regx.test(message.content);
  
  console.log(userSelected + " " + roleSelected);
   
   const user = client.users.cache.find(u => u.tag === userSelected).id; /* Finds user ID */
   
   const role = message.guild.roles.cache.find(role => role.name === roleSelected); /* Looks for the role that was requested */
   
   if(message.guild.member.cache.has.find(user)){ /* Looks for user in guild */
   
   message.reply("User Found.");
   console.log("Found User");
  
   } /* End of if statement */
  
    
  
   if(message.member.roles.cache.some(role => role.name === roleSelected)){ message.reply("User has the role."); } /* If user has role it will say it */
    
   
  /* else{ /* If user does not have role it will attempt to add it 
   message.reply("User does not have the role.");
   user.role.add(role);
   message.reply("Role added.");
       }*/
  
  
 } /* End of if Statement */
 }
 /* else{ /* User who typed command does not have perms to manage roles  message.reply("This is an admin command") } */
  
  
 }


 catch(err){
  message.reply("ERROR");
  console.log(err);
 }
});

client.login(token.token); /* Logs the bot into Discord */

























 
 
/* Help me */
