  if (Argumen.toUpperCase() === "ENABLE") {
  msg.channel.send(`Enable`);
  db.set(`${msg.guild.id}.Config.Welcome.ED`, "YA");
};

if (Argumen.toUpperCase() === "DISABLE") {
  msg.channel.send(`Disable`);
  db.set(`${msg.guild.id}.Config.Welcome.ED`, "TIDAK");
};

if (Argumen.toUpperCase() === "CHANNEL") {
  let Channel = msg.mentions.channels.first();
  if (!Channel) {
    msg.channel.send(`Channel??`);
  } else {
    msg.channel.send(`Channel: ${Channel.id}`);
    db.set(`${msg.guild.id}.Config.Welcome.Channel`, Channel.id);
  };
};

if (Argumen.toUpperCase() === "MESSAGE" || Argumen.toUpperCase() === "MSG") {
  let Message = args.slice(2).join(" ");
  if (Message.length > 34) {
    msg.channel.send(`Message??`);
  } else {
    msg.channel.send(`Message: ${Message}`);
    db.set(`${msg.guild.id}.Config.Welcome.Message`, Message);
  };
};

if (Argumen.toUpperCase() === "BACKGROUND" || Argumen.toUpperCase() === "BG") {
  let Background = args.slice(2).join(" ");
  if (!Background) {
    msg.channel.send(`Background??`);
  } else {
    msg.channel.send(`Background: ${Background}`);
    db.set(`${msg.guild.id}.Config.Welcome.Background`, Background);
  };
};

if (Argumen.toUpperCase() === "TEST") {
  let Config = db.get(`${msg.guild.id}.Config.Welcome.ED`);
  if (Config === "YA") {
      
    let BG = db.get(`${msg.guild.id}.Config.Welcome.Background`);
    if (!BG) BG = "URL DEFAULT BACKGROUND";
      
    let MSG = db.get(`${msg.guild.id}.Config.Welcome.Message`);
    if (!MSG) MSG = "DEFAULT MESSAGE";
      
    var imageUrlRegex = /\?size=2048$/g;
    var { body: avatar } = await get(msg.author.displayAvatarURL.replace(imageUrlRegex, "?size512"));
    var { body: background } = await get(`${BG}`);
      
    async function createCanvas() {
      return new Canvas(1024, 450)
        .addImage(background, 0, 0, 1024, 450)
        .setColor("#ffffff")
        .addCircle(512, 155, 120)
        .addCircularImage(avatar, 512, 155, 115)
        .setTextAlign("center")
        .setColor("#ffffff")
        .addText("WELCOME", 512, 355)
        .setTextAlign("center")
        .setColor("#ffffff")
        .addText(`${msg.member.user.tag}`, 512, 395)
        .setTextAlign("center")
        .setColor("#ffffff")
        .addText(`${MSG}`, 512, 430)
        .toBuffer();
    };
      
    msg.channel.send({files: [{ attachment: await createCanvas(), name: "welcome.png" }]});
  } else {
    msg.channel.send(`Enable!?!?`);
  };
};
