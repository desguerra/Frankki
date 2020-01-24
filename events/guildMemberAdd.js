module.exports = (client, member) => {
  var mem = member.id;
  var welcome = "Welcome!";
  switch (Math.floor(Math.random() * (7-1) + 1)) {
      case 1:
        welcome = "Why hello there!";
        break;
      case 2:
        welcome = "WELCOME TO OUR SERVER";
        break;
      case 3:
        welcome = "Lets all welcome this person... (what's your name again??)";
        break;
      case 4:
        welcome = "A wild <@" + mem.toString() + "> appeared!";
        break;
      case 5:
        welcome = "<@" + mem.toString() + "> has joined the part-ay!";
        break;
      case 6:
        welcome = "hi there new member please stay uwu~";
        break;
      default:
        welcome = "SUPPPPPPPPPPPPPPPPPPPPPPpppppppp";
        break;
  }
  member.guild.channels.get('545668553098133505').send(welcome); 
  member.send(`Welcome to our server! Hope you enjoy your stay. Beep boop.`);
}
