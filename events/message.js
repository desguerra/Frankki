module.exports = (client, message) => {
  const textLower = message.content.toLowerCase();
  const textSpaces = textLower.replace(/\s+/g, '');
  const text = textSpaces.replace(/'/g, '')
  
  var secret = (Math.floor(Math.random() * (100-1) + 1));
  if (secret === 99) {
    message.channel.send("I really liked that message!");
  }
  if (secret === 7) {
    message.channel.send("Don't genius live in lamps?");
  }
  if (secret === 48) {
    message.channel.send("GUYS GUESS WHAT 👀");
  }
  if (secret === 72) {
    message.channel.send("`memes aren't always dreams`");
  }
  var moreSec = (Math.floor(Math.random() * (1000-1) + 1));
  if (moreSec === 99) {
    message.channel.send("I REALLY liked that message REALLY LIKED IT");
  }
  if (moreSec === 990) {
    message.channel.send("If OP stands for “Original Poster” well then... POOP MUST STAND FOR “POSTER ORIGINAL ORIGINAL POSTER” (MARK THIS NSFW FOR THE LADIES)");
  }
  
  if (text.includes("ilove") || text.startsWith("ily")) {
    message.channel.send("💕love is in the air~ uwu");
  }
  if (text.includes("goodnight")) {
    message.channel.send("sleep tight~ 🌙✨");
  }
  if (text.includes("goodmornin") || text.includes("goodmorn") || text.includes("mornin")) {
    message.channel.send("🌞");
  }
  if (text === "ireallycantstay" || text === "irlycantstay") {
    message.channel.send("baby it's cold outside❄");
    if (secret === 11) { // IF/ELSE will send "randomly"
      message.channel.send("https://www.youtube.com/watch?v=crFQpOCDfEc");
    }
    else if (secret === 10) { // for Marv!!
      message.channel.send("-q baby it's cold outside idina");
    }
  }
  if (text.startsWith("hello") || text.startsWith("greetings") || text === "hey" || text.startsWith("sup") || text === "heyguys") {
    switch (Math.floor(Math.random() * (7-1) + 1)) {
      case 1:
        message.reply('hi there!✨');
        break;
      case 2:
        message.reply("what's shakin, bacon");
        break;
      case 3:
        message.reply('uwu~ 💖');
        break;
      case 4:
        message.reply("what's up, buttercup");
        break;
      case 5:
        message.reply("what's on your mind?");
        break;
      case 6:
        message.reply("hewwo~ o/");
        break;
      default:
        message.reply('hi there!');
        break;
    }
  }
  if (text.startsWith("frankki" || "<@545662687896535050>")) { //FIXME: doesn't work when we "@" frankki
    message.reply('you summoned me?');
  }
  if (text.startsWith("pog") || text.includes("pogger")) {
    const pogs = client.emojis.find(emoji => emoji.name === "pogs");
    message.channel.send(`${pogs}`);
  }
  if (text.includes("emily")) {
    var emily = "em1";
    switch (Math.floor(Math.random() * (7-1) + 1)) {
      case 1:
        emily = client.emojis.find(emoji => emoji.name === "em1");
        break;
      case 2:
        emily = client.emojis.find(emoji => emoji.name === "em");
        break;
      case 3:
        emily = client.emojis.find(emoji => emoji.name === "emgroovy");
        break;
      case 4:
        emily = client.emojis.find(emoji => emoji.name === "emdissolve");
        break;
      case 5:
        emily = client.emojis.find(emoji => emoji.name === "emrainbow");
        break;
      case 6:
        message.channel.send('We all love <@336762671774957570>!! uwu');
      default:
        emily = client.emojis.find(emoji => emoji.name === "em1");
        break;
    }
    message.channel.send(`${emily}`);
  }
          
}
