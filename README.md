# Discord Welcome Image. 

Yups! Nih Buat Kalian Yang Pengen Welcome Image... Bisa Langsung Disimak Yaaww!
Jadi... Welcome Image Yang Aku Buat Ini Ga Sebagus Kayak Punya Orang - Orang... Cukup - Cukup-in Lah Yaaaa Wkwkw... 
Kalau Mau Kalian Ubah Silahkan, Biar Jadi Semakin Bagus. Selamat Mencoba!

## About

### Made by dynstyxx.#4613 With Luve :3

* Enable/Disable Welcome Image 
* Channel Bisa Di Set Dimanapun 
* Message Bisa Di Custom... Max 34 Huruf (Recomended)
* Background Bisa Bisa Di Custom Menggunakan Link (`.JPG` / `.PNG`)

## Installation

* Install Quick.db `npm i quick.db`
* Install Node-Superfetch `npm i node-superfetch`
* Install Canvas `npm i canvas`
* Install Canvas-Constructor `npm i canvas-constructor`

## Read And Learn

### Meng-Aktifkan & Meng-Nonaktifkan Welcome Image

* **Enable**: Enable Untuk Meng-Aktifkan Welcome Image.
* **Disable**: Disable Untuk Meng-Nonaktifkan Welcome Image.
* **Usage**: `[Prefix]Welcome <Enable/Disable>`

```js
bot.on("message", async(msg) => {
  const args = msg.content.split(" ");
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(Prefix.length);
  const Argumen = args[1];
  
  if (command.toUpperCase() === "WELCOME") {
    if (Argumen.toUpperCase() === "ENABLE") {
      msg.channel.send(`Enable`);
      db.set(`${msg.guild.id}.Config.Welcome.ED`, "YA");
    };

    if (Argumen.toUpperCase() === "DISABLE") {
      msg.channel.send(`Disable`);
      db.set(`${msg.guild.id}.Config.Welcome.ED`, "TIDAK");
    };
  };
});
```

### Meng-Custom Channel Untuk Welcome Image

* **Channel**: Menentukan Channel Untuk Welcome Image.
* **Usage**: `[Prefix]Welcome Channel <#channel>`

```js
bot.on("message", async msg => {
  const args = msg.content.split(" ");
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(Prefix.length);
  const Argumen = args[1];

  if (command.toUpperCase() === "WELCOME") {
    if (Argumen.toUpperCase() === "CHANNEL") {
      let Channel = msg.mentions.channels.first();
      if (!Channel) {
        msg.channel.send(`Channel??`);
      } else {
        msg.channel.send(`Channel: ${Channel.id}`);
        db.set(`${msg.guild.id}.Config.Welcome.Channel`, Channel.id);
      };
    };
  };
});
```

### Meng-Custom Message Pada Welcome Image

* **Message**: Meng-Custom Welcome Message. (Message Akan Ditampilkan Pada Welcome Image)
* **Usage**: `[Prefix]Welcome Message <Message>`
  
```js
bot.on("message", async msg => {
  const args = msg.content.split(" ");
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(Prefix.length);
  const Argumen = args[1];

  if (command.toUpperCase() === "WELCOME") {
    if (Argumen.toUpperCase() === "MESSAGE" || Argumen.toUpperCase() === "MSG") {
      let Message = args.slice(2).join(" ");
      if (Message.length > 34) {
        msg.channel.send(`Message??`);
      } else {
        msg.channel.send(`Message: ${Message}`);
        db.set(`${msg.guild.id}.Config.Welcome.Message`, Message);
      };
    };
  };
});
```

### Meng-Custom Background Welcome Image

* **Background**: Meng-Custom Background Pada Welcome Image
* **Usage**: `[Prefix]Welcome Background <URL -> .JPG / .PNG>`
  
```js
bot.on("message", async msg => {
  const args = msg.content.split(" ");
  let command = msg.content.toLowerCase().split(" ")[0];
  command = command.slice(Prefix.length);
  const Argumen = args[1];

  if (command.toUpperCase() === "WELCOME") {
    if (Argumen.toUpperCase() === "BACKGROUND" || Argumen.toUpperCase() === "BG") {
      let Background = args.slice(2).join(" ");
      if (!Background) {
        msg.channel.send(`Background??`);
      } else {
        msg.channel.send(`Background: ${Background}`);
        db.set(`${msg.guild.id}.Config.Welcome.Background`, Background);
      };
    };
  };
});
```

### Read And Learn

* Tambahkan Event `"guildMemberAdd"` Pada PROJECT Kalian
* Get Database Welcome Image
* Buat Susunan Canvas Welcome Image
* Send Welcome Image Berupa File Gambar

```js
bot.on("guildMemberAdd", async member => {
  let Config = db.get(`${member.guild.id}.Config.Welcome.ED`);
  if (Config === "YA") {
    let Channel = db.get(`${member.guild.id}.Config.Welcome.Channel`);
    if (!Channel) {
      return;
    } else {
      let BG = db.get(`${member.guild.id}.Config.Welcome.Background`);
      if (!BG) BG = "URL_Background.png";
        
      let MSG = db.get(`${member.guild.id}.Config.Welcome.Message`);
      if (!MSG) MSG = "WELCOME (Default Message)";
        
      var imageUrlRegex = /\?size=2048$/g;
      var { body: avatar } = await get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size512"));
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
            .addText(`${member.user.tag}`, 512, 395)
            .setTextAlign("center")
            .setColor("#ffffff")
            .addText(`${MSG}`, 512, 430)
            .toBuffer();
      };
      let Channelz = bot.channels.get(`${Channel}`);
      Channelz.send({files: [{ attachment: await createCanvas(), name: "welcome.png" }]});
    };
  } else {
    return;
  };
});
```

## Results

`Ini Adalah Hasil Dari Apa Yang Sudah Kalian Baca Dan Simak Diatas! Selamat Mencobaa!!`

* Enable/Disable Welcome Image 
* Channel Bisa Di Set Dimanapun 
* Message Bisa Di Custom... Max 34 Huruf (Recomended)
* Background Bisa Bisa Di Custom Menggunakan Link (`.JPG` / `.PNG`)

<img src="https://cdn.discordapp.com/attachments/684577548381978657/688620806011617314/welcome.png"/>




